import classes from './d3.scss';
import React from 'react';
import * as reactD3 from 'react-d3-components';
const {LineChart, Brush} = reactD3;

export default class DailyGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: {
        w: this.props.width,
        h: this.props.height
      },
      data: this.props.dataGraph["data_moment"]["TEMPERATURE"],
      // data: [{
      //   label: 'Something A',
      //   values: [
      //     {x: new Date(2015, 2, 5), y: 1},
      //     {x: new Date(2015, 2, 6), y: 2},
      //     {x: new Date(2015, 2, 7), y: 0},
      //     {x: new Date(2015, 2, 8), y: 3},
      //     {x: new Date(2015, 2, 9), y: 2},
      //     {x: new Date(2015, 2, 10), y: 3},
      //     {x: new Date(2015, 2, 11), y: 4},
      //     {x: new Date(2015, 2, 12), y: 4},
      //     {x: new Date(2015, 2, 13), y: 1},
      //     {x: new Date(2015, 2, 14), y: 5},
      //     {x: new Date(2015, 2, 15), y: 0},
      //     {x: new Date(2015, 2, 16), y: 1},
      //     {x: new Date(2015, 2, 16), y: 1},
      //     {x: new Date(2015, 2, 18), y: 4},
      //     {x: new Date(2015, 2, 19), y: 4},
      //     {x: new Date(2015, 2, 20), y: 5},
      //     {x: new Date(2015, 2, 21), y: 5},
      //     {x: new Date(2015, 2, 22), y: 5},
      //     {x: new Date(2015, 2, 23), y: 1},
      //     {x: new Date(2015, 2, 24), y: 0},
      //     {x: new Date(2015, 2, 25), y: 1},
      //     {x: new Date(2015, 2, 26), y: 1}
      //   ]
      // },
      //   {
      //     label: 'SomethingB',
      //     values: [
      //       {x: new Date(2015, 2, 5), y: 2},
      //       {x: new Date(2015, 2, 6), y: 3},
      //       {x: new Date(2015, 2, 7), y: 2},
      //       {x: new Date(2015, 2, 8), y: 5},
      //       {x: new Date(2015, 2, 9), y: 3},
      //       {x: new Date(2015, 2, 10), y: 5},
      //       {x: new Date(2015, 2, 11), y: 6},
      //       {x: new Date(2015, 2, 12), y: 6},
      //       {x: new Date(2015, 2, 13), y: 2},
      //       {x: new Date(2015, 2, 14), y: 7},
      //       {x: new Date(2015, 2, 15), y: 0},
      //       {x: new Date(2015, 2, 16), y: 4},
      //       {x: new Date(2015, 2, 16), y: 3},
      //       {x: new Date(2015, 2, 18), y: 6},
      //       {x: new Date(2015, 2, 19), y: 6},
      //       {x: new Date(2015, 2, 20), y: 5},
      //       {x: new Date(2015, 2, 21), y: 4},
      //       {x: new Date(2015, 2, 22), y: 4},
      //       {x: new Date(2015, 2, 23), y: 1},
      //       {x: new Date(2015, 2, 24), y: 0},
      //       {x: new Date(2015, 2, 25), y: 1},
      //       {x: new Date(2015, 2, 26), y: 1}
      //     ]
      //   }],
      xScale: d3.time.scale().domain(
        [this.props.dataGraph["data_moment"]["TEMPERATURE"]["values"][0].x,
          this.props.dataGraph["data_moment"]["TEMPERATURE"]["values"][this.props.length - 1].x]
      ).range([0, this.props.width - 100]),
      xScaleBrush: d3.time.scale().domain(
        [this.props.dataGraph["data_moment"]["TEMPERATURE"]["values"][0].x,
          this.props.dataGraph["data_moment"]["TEMPERATURE"]["values"][this.props.length - 1].x]
      ).range([0, this.props.width - 100])
    };
    this._onChange = this._onChange.bind(this);
    this.dashFunc = this.dashFunc.bind(this);
    this.widthFunc = this.widthFunc.bind(this);
    this.linecapFunc = this.linecapFunc.bind(this);
  };

  dashFunc(label) {
    if (label == "PRESSURE") {
      return "4 4 4";
    }
    // if (label == "SomethingB") {
    //   return "3 4 3";
    // }
  };

  widthFunc(label) {
    if (label == "PRESSURE") {
      return "4";
    }
    // if (label == "SomethingB") {
    //   return "2";
    // }
  };

  linecapFunc(label) {
    if (label == "PRESSURE") {
      return "round";
    }
  };

  componentWillReceiveProps(nextProps){
    if (nextProps.width != this.props.width || nextProps.height != this.props.height ) {
      this.setState({
        size: {
          w: nextProps.width,
          h: nextProps.height
        },
        xScale: d3.time.scale().domain(
          [nextProps.dataGraph["data_moment"]["TEMPERATURE"]["values"][Math.round(nextProps.length/5)].x,
            nextProps.dataGraph["data_moment"]["TEMPERATURE"]["values"][Math.round(nextProps.length/4)].x]
        ).range([0, nextProps.width - 100]),
        xScaleBrush: d3.time.scale().domain(
          [nextProps.dataGraph["data_moment"]["TEMPERATURE"]["values"][0].x,
            nextProps.dataGraph["data_moment"]["TEMPERATURE"]["values"][nextProps.length - 1].x]
        ).range([0, nextProps.width - 100])
      })
    }
  };

  _onChange(extent) {
    this.setState({
      xScale: d3.time.scale().domain([extent[0], extent[1]]).range([0, this.state.size.w - 100]),
    });
  };

  render() {
    const width = this.state.size.w;
    const height = this.state.size.h - 100;

    const min = 4;
    const max = 5;

    return (
      <div className={classes.graphWrap} ref="wrapper">
        <LineChart
          data={this.state.data}
          width={width}
          height={height}
          margin={{top: 10, bottom: 50, left: 50, right: 20}}
          xScale={this.state.xScale}
          xAxis={{
            tickArguments: [2],
            innerTickSize: 10,
            tickPadding: 5,
            outerTickSize: 10,
            className: "xAxis",
            tickValues: this.state.xScale.ticks(d3.time.day, 2),
            tickFormat: d3.time.format("%m/%d"),
            label: "Дати",
            fill: "red",
            orientation: 'bottom',
          }}
          tooltipHtml={(x, y) => {
            const infoX = y['x'];
            const infoY = y['y'];
            return `x: ${infoX} y: ${infoY}`
          }}
          shapeColor={"#FFA000"}
          yAxis={{
            label: "Тиск",
            className: "yAxis",
            orientation: 'left',
            tickArguments: [20],
            zero: max,
          }}
          //yScale={d3.time.scale().domain([min, max]).range([0, height])}
          stroke={{
            strokeDasharray: this.dashFunc,
            strokeWidth: this.widthFunc,
            strokeLinecap: this.linecapFunc
          }}
        />
        <div className={classes.brush} style={{float: 'none'}}>
          <Brush
            width={width}
            height={70}
            margin={{
              top: 0,
              bottom: 50,
              left: 45,
              right: 15
            }}
            xScale={this.state.xScaleBrush}
            extent={
              [this.props.dataGraph["data_moment"]["TEMPERATURE"]["values"][Math.round(this.props.length/5)].x,
                this.props.dataGraph["data_moment"]["TEMPERATURE"]["values"][Math.round(this.props.length/4)].x]
            }
            onChange={this._onChange}
            xAxis={{
              tickArguments: [10],
              tickValues: this.state.xScaleBrush.ticks(d3.time.day, 2),
              tickFormat: d3.time.format("%m/%d"),
              tickDirection: 'diagonal',
            }}
          />
        </div>
      </div>
    );
  }
}


// import classes from './d3.scss';
// import React from 'react';
// import rd3 from 'react-d3';
// const LineChart = rd3.LineChart;
// import * as d3 from "d3";
//
// export default class DailyGraph extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       barData: [
//         {
//           name: 'series1',
//           values: [
//             { x: '2017.01.01', y: 20 },
//             { x: '2017.01.02', y: 30 },
//             { x: '2017.01.03', y: 10 },
//             { x: '2017.01.04', y: 5 },
//             { x: '2017.01.05', y: 8 },
//             { x: '2017.01.06', y: 15 },
//             { x: '2017.01.07', y: 10 } ],
//           strokeWidth: 3,
//           strokeDashArray: "5,5",
//         },
//         {
//           name: 'series2',
//           values : [
//             { x: '2017.01.01', y: 8 },
//             { x: '2017.01.02', y: 5 },
//             { x: '2017.01.03', y: 20 },
//             { x: '2017.01.04', y: 12 },
//             { x: '2017.01.05', y: 4 },
//             { x: '2017.01.06', y: 6 },
//             { x: '2017.01.07', y: 2 } ]
//         },
//         {
//           name: 'series3',
//           values: [
//             { x: '2017.01.01', y: 0 },
//             { x: '2017.01.02', y: 5 },
//             { x: '2017.01.03', y: 8 },
//             { x: '2017.01.04', y: 2 },
//             { x: '2017.01.05', y: 6 },
//             { x: '2017.01.06', y: 4 },
//             { x: '2017.01.07', y: 2 }
//           ]
//         }
//       ]
//     };
//   };
//
//   render () {
//     const {dataGraph:{data_daily, data_hourly, data_moment}} = this.props;
//     const {barData} = this.state;
//
//     return (
//       <div className={classes.graphContainer} >
//
//
//
//         <div className={classes.graphWrap}>
//           <LineChart
//             legend={true}
//             data={barData}
//             xAccessor={(d)=> {
//               return new Date(d.x);
//             }}
//             yAccessor={(d)=>d.y}
//             xAxisTickInterval={{unit: 'data', interval: 0}}
//             width='100%'
//             height='100%'
//             viewBoxObject={{
//               x: 0,
//               y: 0,
//               width: 1000,
//               height: 300
//             }}
//             margins = {{left: 70, right: 30, top: 0, bottom: 0}}
//             title="Денні графіки"
//             yAxisLabel="Значення показника"
//             xAxisLabel="Час"
//             gridHorizontal={true}
//             gridVertical={true}
//             axesColor="#ff3300"
//             xOrient="bottom"
//             yOrient="left"
//           />
//         </div>
//       </div>
//     )
//   }
// }
//
// DailyGraph.PropTypes = {
//   dataGraph: React.PropTypes.object.isRequired,
// };