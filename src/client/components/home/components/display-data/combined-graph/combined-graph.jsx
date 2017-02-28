import classes from './combined-graph.scss';
import React from 'react';
import SimpleLine from '../simple-line/simple-line.jsx';
import {
  data_daily_table,
  data_hourly_table,
} from '../../../../../utils/constants.js';

export default class CombinedGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graphCombineSize: {
        w: 0,
        h: 0
      }
    };

    this.displayGraphSimpleLine = this.displayGraphSimpleLine.bind(this);
  }

  displayGraphSimpleLine() {
    const {
      dataLine,
      dateLabel,
      selectedDataGraph,
      width,
      height
    } = this.props;
    let graphConstants;

    switch (selectedDataGraph) {
      case "data_daily":
        graphConstants = data_daily_table;
        break;
      case "data_hourly":
        graphConstants = data_hourly_table;
        break;
    }

    return _.keys(graphConstants).map(row =>
      <SimpleLine
        dataLine={dataLine}
        dataYTitle={row}
        dataXTitle={dateLabel}
        title={graphConstants[row]}
        width={width}
        height={height}
      />
    )
  };

  render() {
    return (
      <div className={classes.graphCombine} ref="graphCombine" >
        {this.displayGraphSimpleLine()}
      </div>
    )
  }
}
