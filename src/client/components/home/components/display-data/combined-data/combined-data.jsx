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
      combinedSize: {
        combinedH: props.height,
        navH: 0,
        tableH: 0
      },
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
    this.fitToParentSize = this.fitToParentSize.bind(this);
  };

  fitToParentSize() {
    const combinedH = this.refs.combinedWrap.offsetHeight;
    const navH = this.refs.combinedNavWrap.offsetHeight;
    const tableH = combinedH - navH;

    const currentSize = this.state.combinedSize;

    if (combinedH !== currentSize.combinedH || navH !== currentSize.navH) {

      this.setState({
        combinedSize: {
          combinedH,
          navH,
          tableH
        }
      })
    }
  };

  selectTableRange(startDate, endDate, displayData, dateLabel) {
    let startIndex = binarySearch( convertDate(startDate), displayData, dateLabel );
    let endIndex = binarySearch( convertDate(endDate), displayData, dateLabel );

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
    const {displayData, dateLabel, selectedDataGraph, combinedSize:{combinedH}} = this.state;
    const {handleChangeTableRange} = this.props;

    const startDate = getDate(displayData, dateLabel, 0);
    const firstDayMonth = getFirstDayMonth(new Date(startDate));

    const endDate = getEndDate(selectedDataGraph, startDate);
    const selectRange = this.selectTableRange(startDate, endDate, displayData, dateLabel);

    let mm, dd, last;
    last = getDate(displayData, dateLabel, displayData.length-1);
    dd = moment(last).date();
    mm = moment(last).month();
    const maxDate = moment(last).month(mm).date(--dd);

    const navH = this.refs.combinedNavWrap.offsetHeight;
    const tableH = combinedH - navH - 15; //calculate with considering height of tabs and margin of h4

    this.setState({
      startDate: firstDayMonth,
      endDate,
      minDate: startDate,
      maxDate,
      selectRange,
      combinedSize:{
        navH,
        tableH
      }
    }, () => {
      handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);
    });

    window.addEventListener('resize', this.fitToParentSize);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitToParentSize);
  };

  componentDidUpdate(prevProps){
    if (prevProps.height != this.props.height) {
      this.fitToParentSize();
    }
  };

  handleChangeDataDisplay(selectedDataDisplay) {
    const {dataGraph, handleChangeTableRange} = this.props;
    let dateLabel, selectedDataGraph, firstDayMonth, maxDate, last;

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

    last = getDate(displayData, dateLabel, displayData.length-1);

    if (selectedDataGraph == "data_daily") {
      firstDayMonth = getFirstDayMonth(new Date(startDate));

      let mm, dd;
      dd = moment(last).date();
      mm = moment(last).month();
      maxDate = moment(last).month(mm).date(--dd);
    } else {
      firstDayMonth = startDate;
      maxDate = last;
    }

    const endDate = getEndDate(selectedDataGraph, startDate);
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
    const {selectedDataGraph, dateLabel, displayData} = this.state;
    const {handleChangeTableRange} = this.props;

    const startDate = date;
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

  render() {
    const {pointTitle, tableData, width, height} = this.props;
    const {
      minDate,
      maxDate,
      startDate,
      endDate,
      selectRange,
      dateLabel,
      selectedDataGraph,
      combinedSize:{tableH}
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
      },
      table: {
        height: tableH
      }
    };

    return (
      <div className={classes.wrapCombine} ref="combinedWrap" >

        <div className={classes.tableCombine} >

          <div className={classes.navCombine} ref="combinedNavWrap" >
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

          <div className={classes.wrapCombinedTable} style={style.table} >
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

