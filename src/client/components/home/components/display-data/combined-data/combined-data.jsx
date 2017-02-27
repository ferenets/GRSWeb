import classes from './combined-data.scss';
import React from 'react';
import {
  _dataGraphCombine,
  data_daily,
  data_hourly,
  binarySearch,
  parseDate,
  convertDate,
  getDate
} from '../../../../../utils/constants.js';
import DayPiker from '../day-piker/day-piker.jsx';
import GraphMenu from '../graph-menu/graph-menu.jsx';
import TableData from '../table-data/table-data.jsx';

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
    this.handleChangeEndData = this.handleChangeEndData.bind(this);
  };

  selectTableRange(startDate, endDate) {
    const {displayData, dateLabel} = this.state;

    let startIndex = binarySearch( convertDate(startDate), displayData, dateLabel );
    let endIndex = binarySearch( convertDate(endDate), displayData, dateLabel );

    //if (startIndex > 0) --startIndex;
    if (endIndex < displayData.length-1) ++endIndex;

    return displayData.slice(startIndex, endIndex);
  };

  componentDidMount() {
    const {displayData, dateLabel, selectedDataGraph} = this.state;
    const {handleChangeTableRange} = this.props;

    const startDate = getDate(displayData, dateLabel, 0);
    const endDate = getDate(displayData, dateLabel, displayData.length-1 );
    const selectRange = this.selectTableRange(startDate, endDate);

    this.setState({
      startDate,
      endDate,
      minDate: startDate,
      maxDate: endDate,
      selectRange,
    }, () => {
      handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);
    });
  };

  handleChangeDataDisplay(selectedDataDisplay) {
    const {dataGraph, handleChangeTableRange} = this.props;
    let dateLabel, selectedConstant;

    switch (selectedDataDisplay) {
      case "data_daily":
        dateLabel = "DAY";
        selectedConstant = "data_daily";
        break;
      case "data_hourly":
        dateLabel = "DAY_HOUR";
        selectedConstant = "data_hourly";
        break;
    }

    this.setState({
      displayData: dataGraph[selectedConstant],
      dateLabel,
      selectedDataGraph: selectedConstant,
    }, () => {
      const {displayData, selectedDataGraph, dateLabel} = this.state;

      const startDate = getDate(displayData, dateLabel, 0);
      const endDate = getDate(displayData, dateLabel, displayData.length-1 );
      const selectRange = this.selectTableRange(startDate, endDate);

      handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);

      this.setState({
        startDate,
        endDate,
        minDate: startDate,
        maxDate: endDate,
        selectRange
      });
    });
  };

  handleChangeStartData(date) {
    const {selectedDataGraph, dateLabel, endDate} = this.state;

    this.setState({
      startDate: date
    }, () => {
      const {handleChangeTableRange} = this.props;
      const selectRange = this.selectTableRange(this.state.startDate, endDate);
      handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);
    });
  };

  handleChangeEndData(date) {
    const {selectedDataGraph, dateLabel, startDate} = this.state;

    this.setState({
      endDate: date
    }, () => {
      const {handleChangeTableRange} = this.props;
      const selectRange = this.selectTableRange(startDate, this.state.endDate);
      handleChangeTableRange(selectRange, selectedDataGraph, dateLabel);
    });
  };

  render() {
    const {pointTitle, tableData} = this.props;
    const {minDate, maxDate, startDate, endDate, selectRange} = this.state;

    return (
      <div className={classes.wrapCombine} >

        <div className={classes.navCombine} >
          <GraphMenu
            title="Категорія даних"
            dataGraphLabel={_dataGraphCombine}
            handleChangeGraphicDisplay={this.handleChangeDataDisplay}
          />
          <div className={classes.navPikerCombine} >
            <DayPiker
              label="Початкова дата"
              defaultDate={startDate}
              minDate={minDate}
              maxDate={maxDate}
              handleChangeData={this.handleChangeStartData}
            />
            <DayPiker
              label="Кінцева дата"
              defaultDate={endDate}
              minDate={minDate}
              maxDate={maxDate}
              handleChangeData={this.handleChangeEndData}
            />
          </div>
        </div>

        <div className={classes.tableCombine} >
          <TableData
            pointTitle={pointTitle}
            tableData={tableData}
          />
        </div>

      </div>
    )
  }
}

