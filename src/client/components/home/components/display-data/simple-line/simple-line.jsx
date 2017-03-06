import classes from './simple-line.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import * as Tooltip from 'react-d3-tooltip';
const {LineTooltip, SimpleTooltip} = Tooltip;

import {parseDate} from '../../../../../utils/constants.js';

export default class SimpleLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setYAxisDomain = this.setYAxisDomain.bind(this);
  }

  setYAxisDomain(selectedDataArr, prop){
    const arr = [];
    selectedDataArr.map(row => arr.push(row[prop]));
    return [_.min(arr), _.max(arr)];
  };

  render() {
    const {
      dataLine,
      dataYTitle,
      dataXTitle,
      title,
      width,
      height
    } = this.props;

    const chartSeries = [{
      field: dataYTitle,
      name: title,
      color: '#ff7f0e',
      style: {
        "stroke-width": 2,
        "stroke-opacity": .2,
        "fill-opacity": .2
      }
    }],
    margins = {left: 55, right: 10, top: 10, bottom: 8},
    x = (d) => parseDate(d[dataXTitle]),
    yDomain = this.setYAxisDomain(dataLine, dataYTitle),
    xScale = 'time';

    return (
      <div className={classes.simpleLine} >
        <LineTooltip
          width={width/4.2}
          height={(height - 80)/2}
          margins={margins}
          data={dataLine}
          chartSeries={chartSeries}
          x={x}
          xScale={xScale}
          yDomain={yDomain}
          yLabel={title}
          showLegend={false}
          legendClassName="graphLegend"
        >
          <SimpleTooltip />
        </LineTooltip>
      </div>
    )
  }
}
