import React from 'react';
import ReactDOM from 'react-dom';
import Line from './line.jsx';

export default class SimpleLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.displayGraphSimpleLine = this.displayGraphSimpleLine.bind(this);
  }

  displayGraphSimpleLine() {
    const {dataLine, dateLabel, selectedDataGraph} = this.props;
console.log('hi');
    dataLine.map(row => {
      if (row !== dateLabel) {
        return (
          <Line
            dataLine={dataLine}
            dataGraphTitle={row}
            datePropTitle={dateLabel}
            graphConstants={selectedDataGraph}
          />
        )
      }
    })
  };

  render() {
    return (
      <div>
        {this.displayGraphSimpleLine}
      </div>
    )
  }
}
