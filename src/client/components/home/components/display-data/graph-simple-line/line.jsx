import React from 'react';
import ReactDOM from 'react-dom';
import * as reactD3Basic from 'react-d3-basic';
const {LineChart} = reactD3Basic;
import {
  _dataGraph,
  data_daily,
  data_hourly,
  data_moment,
  parseDate,
  convertDate,
  binarySearch
} from '../../../../../utils/constants.js';

export default class Line extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lineData: props.lineData
    };
  }

  render() {
    const chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e',
        style: {
          "stroke-width": 2,
          "stroke-opacity": .2,
          "fill-opacity": .2
        }
      }
    ];
    const {
      dataLine,
      dataGraphTitle,
      datePropTitle,
      graphConstants
    } = this.props;

    console.log(dataLine,
      dataGraphTitle,
      datePropTitle,
      graphConstants);

    // const x = (d) => parseDate(d[xDataSelectLabel]);

    return (
      <div>
        {/*<LineChart*/}
        {/*width={600}*/}
        {/*height={300}*/}
        {/*data={lineData}*/}
        {/*chartSeries={chartSeries}*/}
        {/*x={x}*/}
        {/*xScale="time"*/}
        {/*/>*/}
      </div>
    )
  }
}
