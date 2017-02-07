// import classes from './d3.scss';
// import React from 'react';
// import * as d3Basic from 'react-d3-basic';
// import * as d3Core from 'react-d3-core';
// const {Chart} = d3Core;
// const {LineChart} = d3Basic;
//
// export default class HourlyGraph extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       size: {
//         w: this.props.width,
//         h: this.props.height
//       },
//       //data: this.props.dataGraph["data_daily"]
//       data: [
//         {
//           name: "Lavon Hilll I",
//           BMI: 20.57,
//           age: 12,
//           birthday: "23,4,2012,12",
//           city: "Annatown",
//           married: true,
//           index: 1
//         },
//         {
//           name: "Clovis Pagac",
//           BMI: 24.28,
//           age: 26,
//           birthday: "24,4,2012,12",
//           city: "South Eldredtown",
//           married: false,
//           index: 3
//         },
//         {
//           name: "Gaylord Paucek",
//           BMI: 24.41,
//           age: 30,
//           birthday: "25,4,2012,12",
//           city: "Koeppchester",
//           married: true,
//           index: 5
//         },
//         {
//           name: "Ashlynn Kuhn MD",
//           BMI: 23.77,
//           age: 32,
//           birthday: "26,4,2012,12",
//           city: "West Josiemouth",
//           married: false,
//           index: 6
//         }
//       ]
//     }
//   };
//
//   componentWillReceiveProps(nextProps){
//     if (nextProps.width != this.props.width || nextProps.height != this.props.height ) {
//       this.setState({
//         size: {
//           w: nextProps.width,
//           h: nextProps.height
//         },
//       })
//     }
//   };
//
//   render() {
//     const width = this.state.size.w;
//     const height = this.state.size.h - 100;
//     const margins = {left: 100, right: 100, top: 50, bottom: 50};
//     const chartSeries = [
//       {
//         field: 'age',
//         name: 'Age',
//         color: '#ff7f0e',
//         style: {
//           "strokeWidth": 2,
//           "strokeOpacity": .2,
//           "fillOpacity": .2
//         }
//       }
//     ];
//     const title = "title";
//     const parseDate = d3.time.format("%d%m%Y%H").parse;
//     const x = (d) => {
//       const val = d["birthday"];
//       // console.log(val);
//       return parseDate(val.date);
//     };
//     // const x = (d) => {
//     //   const val = d["DAY"];
//     //   return parseDate(val.month);
//     // };
//     const xScale = 'date';
//
//     return (
//         <LineChart
//           showXGrid= {true}
//           showYGrid= {true}
//           margins= {margins}
//           title={title}
//           data={this.state.data}
//           width={width}
//           height={height}
//           chartSeries={chartSeries}
//           x={x}
//           y={(d) => d["BMI"]}
//           //xScale={xScale}
//         />
//     );
//   }
// }
//
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
//
// // import classes from './d3.scss';
// // import React from 'react';
// // import rd3 from 'react-d3';
// // const LineChart = rd3.LineChart;
// // import * as d3 from "d3";
// //
// // export default class DailyGraph extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       barData: [
// //         {
// //           name: 'series1',
// //           values: [
// //             { x: '2017.01.01', y: 20 },
// //             { x: '2017.01.02', y: 30 },
// //             { x: '2017.01.03', y: 10 },
// //             { x: '2017.01.04', y: 5 },
// //             { x: '2017.01.05', y: 8 },
// //             { x: '2017.01.06', y: 15 },
// //             { x: '2017.01.07', y: 10 } ],
// //           strokeWidth: 3,
// //           strokeDashArray: "5,5",
// //         },
// //         {
// //           name: 'series2',
// //           values : [
// //             { x: '2017.01.01', y: 8 },
// //             { x: '2017.01.02', y: 5 },
// //             { x: '2017.01.03', y: 20 },
// //             { x: '2017.01.04', y: 12 },
// //             { x: '2017.01.05', y: 4 },
// //             { x: '2017.01.06', y: 6 },
// //             { x: '2017.01.07', y: 2 } ]
// //         },
// //         {
// //           name: 'series3',
// //           values: [
// //             { x: '2017.01.01', y: 0 },
// //             { x: '2017.01.02', y: 5 },
// //             { x: '2017.01.03', y: 8 },
// //             { x: '2017.01.04', y: 2 },
// //             { x: '2017.01.05', y: 6 },
// //             { x: '2017.01.06', y: 4 },
// //             { x: '2017.01.07', y: 2 }
// //           ]
// //         }
// //       ]
// //     };
// //   };
// //
// //   render () {
// //     const {dataGraph:{data_daily, data_hourly, data_moment}} = this.props;
// //     const {barData} = this.state;
// //
// //     return (
// //       <div className={classes.graphContainer} >
// //
// //
// //
// //         <div className={classes.graphWrap}>
// //           <LineChart
// //             legend={true}
// //             data={barData}
// //             xAccessor={(d)=> {
// //               return new Date(d.x);
// //             }}
// //             yAccessor={(d)=>d.y}
// //             xAxisTickInterval={{unit: 'data', interval: 0}}
// //             width='100%'
// //             height='100%'
// //             viewBoxObject={{
// //               x: 0,
// //               y: 0,
// //               width: 1000,
// //               height: 300
// //             }}
// //             margins = {{left: 70, right: 30, top: 0, bottom: 0}}
// //             title="Денні графіки"
// //             yAxisLabel="Значення показника"
// //             xAxisLabel="Час"
// //             gridHorizontal={true}
// //             gridVertical={true}
// //             axesColor="#ff3300"
// //             xOrient="bottom"
// //             yOrient="left"
// //           />
// //         </div>
// //       </div>
// //     )
// //   }
// // }
// //
// // DailyGraph.PropTypes = {
// //   dataGraph: React.PropTypes.object.isRequired,
// // };