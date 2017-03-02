import classes from './combined-data.scss';
import React from 'react';
import {
  _dataGraphCombine,
  data_daily,
  data_hourly,
  binarySearch,
  convertDate,
  dateCompare,
  getDate,
  getFirstDayMonth,
  getStartDate,
  getEndDate,
  getNextDate,
} from '../../../../../utils/constants.js';
import moment from 'moment';
import DayPiker from '../day-piker/day-piker.jsx';
import GraphMenu from '../graph-menu/graph-menu.jsx';
import TableData from '../table-data/table-data.jsx';
import CombinedGraph from '../combined-graph/combined-graph.jsx';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';

export default class CombinedData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      endDate: "",
      minDate: "",
      maxDate: "",
      displayData: props.dataGraph["data_daily"],
      dateLabel: "DAY",
      selectedDataGraph: "data_daily",
      selectRange: []
    };

    this.handleChangeDataDisplay = this.handleChangeDataDisplay.bind(this);
    this.selectTableRange = this.selectTableRange.bind(this);
    this.handleChangeStartData = this.handleChangeStartData.bind(this);
    this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
    this.resolutionChangeDate = this.resolutionChangeDate.bind(this);
    //this.handleChangeEndData = this.handleChangeEndData.bind(this);
  };

  selectTableRange(startDate, endDate, displayData, dateLabel) {
    let startIndex = binarySearch( convertDate(startDate), displayData, dateLabel );
    let endIndex = binarySearch( convertDate(endDate), displayData, dateLabel );

    //if (startIndex > 0) --startIndex;
    if (endIndex < displayData.length-1) ++endIndex;

    return displayData.slice(startIndex, endIndex);
  };

  prevDate() {
    const {selectedDataGraph, startDate, displayData, dateLabel} = this.state;
    const {handleChangeTableRange} = this.props;

    const setStartDate = getStartDate(selectedDataGraph, startDate);
    const endDate = getEndDate(selectedDataGraph, setStartDate);
    const selectRange = this.selectTableRange(setStartDate, endDate, displayData, dateLabel);

    this.setState({
      startDate: setStartDate,
      endDate,
      selectRange
    }, () => {
      handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);
    });
  };

  nextDate() {
    const {selectedDataGraph, startDate, displayData, dateLabel} = this.state;
    const {handleChangeTableRange} = this.props;

    const setStartDate = getNextDate(selectedDataGraph, startDate);
    const endDate = getEndDate(selectedDataGraph, setStartDate);
    const selectRange = this.selectTableRange(setStartDate, endDate, displayData, dateLabel);

    this.setState({
      startDate: setStartDate,
      endDate,
      selectRange
    }, () => {
      handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);
    });
  };

  componentDidMount() {
    const {displayData, dateLabel, selectedDataGraph} = this.state;
    const {handleChangeTableRange} = this.props;

    const startDate = getDate(displayData, dateLabel, 0);
    const firstDayMonth = getFirstDayMonth(new Date(startDate));
    const endDate = getEndDate(selectedDataGraph, startDate);
    const selectRange = this.selectTableRange(startDate, endDate, displayData, dateLabel);
    const maxDate = getDate(displayData, dateLabel, displayData.length-1 );

    this.setState({
      startDate: firstDayMonth,
      endDate,
      minDate: startDate,
      maxDate,
      selectRange,
    }, () => {
      handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);
    });
  };

  handleChangeDataDisplay(selectedDataDisplay) {
    const {dataGraph, handleChangeTableRange} = this.props;
    let dateLabel, selectedDataGraph, firstDayMonth;

    switch (selectedDataDisplay) {
      case "data_daily":
        dateLabel = "DAY";
        selectedDataGraph = "data_daily";
        break;
      case "data_hourly":
        dateLabel = "DAY_HOUR";
        selectedDataGraph = "data_hourly";
        break;
    }

    const displayData = dataGraph[selectedDataGraph];
    const startDate = getDate(displayData, dateLabel, 0);

    if (selectedDataGraph == "data_daily") {
      firstDayMonth = getFirstDayMonth(new Date(startDate));
    } else {
      firstDayMonth = startDate;
    }

    const endDate = getEndDate(selectedDataGraph, startDate);
    const maxDate = getDate(displayData, dateLabel, displayData.length-1 );
    const selectRange = this.selectTableRange(startDate, endDate, displayData, dateLabel);
    handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);

    this.setState({
      displayData,
      dateLabel,
      selectedDataGraph,
      startDate: firstDayMonth,
      endDate,
      minDate: startDate,
      maxDate,
      selectRange
    });
  };

  handleChangeStartData(date) {
    const {selectedDataGraph, dateLabel, displayData, maxDate} = this.state;
    const {handleChangeTableRange} = this.props;

    let startDate;

    if (selectedDataGraph == "data_daily" && moment(new Date(date)).isSame(new Date(maxDate)) ) {
      let mm, dd;
      dd = moment(date).date();
      mm = moment(date).month();
      startDate = moment(date).month(mm).date(--dd);
    } else {
      startDate = date;
    }

    //const startDate = date;
    const endDate = getEndDate(selectedDataGraph, startDate);
    const selectRange = this.selectTableRange(startDate, endDate, displayData, dateLabel);
    handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);

    this.setState({
      startDate,
      endDate,
      selectRange
    });
  };

  resolutionChangeDate(firstDate, secondDate) {
    const {selectedDataGraph, startDate} = this.state;

    if (selectedDataGraph == "data_daily") {
      const setStartDate = getStartDate(selectedDataGraph, startDate);

      return dateCompare(firstDate, setStartDate);

    } else {
      return dateCompare(firstDate, secondDate);
    }
  };

  // handleChangeEndData(date) {
  //   const {selectedDataGraph, dateLabel, startDate, displayData} = this.state;
  //   const {handleChangeTableRange} = this.props;
  //   const endDate = date;
  //   const selectRange = this.selectTableRange(startDate, endDate, displayData, dateLabel);
  //   handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);
  //
  //   this.setState({
  //     endDate,
  //     selectRange
  //   });
  // };

  render() {
    const {pointTitle, tableData, width, height} = this.props;
    const {
      minDate,
      maxDate,
      startDate,
      endDate,
      selectRange,
      dateLabel,
      selectedDataGraph
    } = this.state;
    const style = {
      button: {
        width: 25,
        height: 25,
        padding: 0,
        boxShadow: "rgba(0, 0, 0, 0.156863) 0px 3px 3px, rgba(0, 0, 0, 0.227451) 0px 3px 3px",
      },
      iconStyle: {
        width: 25,
        height: 25,
        backgroundColor: '#cecece',
      }
    };

    return (
      <div className={classes.wrapCombine} >

        <div className={classes.tableCombine} >

          <div className={classes.navCombine} >
            <GraphMenu
              title="Категорія даних"
              dataGraphLabel={_dataGraphCombine}
              handleChangeGraphicDisplay={this.handleChangeDataDisplay}
            />
            <div className={classes.wrapSelectDate} >

              <div className={classes.wrapButDate} >
                <FloatingActionButton
                  mini={true}
                  style={style.button}
                  iconStyle={style.iconStyle}
                  onClick={this.prevDate}
                  disabled={this.resolutionChangeDate(new Date(minDate), new Date(startDate))}
                >
                  <ImageNavigateBefore />
                </FloatingActionButton>
              </div>

              <div className={classes.navPikerCombine} >
                <DayPiker
                  label="Початкова дата"
                  defaultDate={startDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  handleChangeData={this.handleChangeStartData}
                  disabled={false}
                />
                <DayPiker
                  label="Кінцева дата"
                  defaultDate={endDate}
                  //minDate={minDate}
                  //maxDate={maxDate}
                  //handleChangeData={this.handleChangeEndData}
                  disabled={true}
                />
              </div>

              <div className={classes.wrapButDate} >
                <FloatingActionButton
                  mini={true}
                  style={style.button}
                  iconStyle={style.iconStyle}
                  onClick={this.nextDate}
                  disabled={dateCompare(new Date(endDate), new Date(maxDate))}
                >
                  <ImageNavigateNext />
                </FloatingActionButton>
              </div>

            </div>
          </div>

          <div className={classes.wrapCombinedTable} >
            <TableData
              pointTitle={pointTitle}
              tableData={tableData}
            />
          </div>
        </div>

        <div className={classes.graphCombine} >

          <CombinedGraph
            dataLine={selectRange}
            dateLabel={dateLabel}
            selectedDataGraph={selectedDataGraph}
            width={width}
            height={height}
          />

        </div>

      </div>
    )
  }
}

