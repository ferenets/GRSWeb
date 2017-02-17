// {/*import classes from './d3.scss';*/}
// {/*import React from 'react';*/}
// {/*import * as d3Basic from 'react-d3-basic';*/}
// {/*const {LineChart} = d3Basic;*/}
//
// {/*export default class HourlyGraph extends React.Component {*/}
//   {/*constructor(props) {*/}
//     {/*super(props);*/}
//
//     {/*this.state = {*/}
//       {/*size: {*/}
//         {/*w: this.props.width,*/}
//         {/*h: this.props.height*/}
//       {/*},*/}
//       {/*//data: this.props.dataGraph["data_daily"]*/}
//       {/*data: [*/}
//         {/*{*/}
//           {/*"name": "Darron Weissnat IV",*/}
//           {/*"BMI": 20.72,*/}
//           {/*"age": 39,*/}
//           {/*// "birthday": "2005-01-03T00:00:00.000Z",*/}
//           {/*"birthday": "20111001",*/}
//           {/*"city": "East Russel",*/}
//           {/*"married": false,*/}
//           {/*"index": 17*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Pablo Ondricka",*/}
//           {/*"BMI": 19.32,*/}
//           {/*"age": 38,*/}
//           {/*// "birthday": "1974-05-13T00:00:00.000Z",*/}
//           {/*"birthday": "20111002",*/}
//           {/*"city": "Lake Edytheville",*/}
//           {/*"married": false,*/}
//           {/*"index": 1*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Mr. Stella Kiehn Jr.",*/}
//           {/*"BMI": 16.8,*/}
//           {/*"age": 34,*/}
//           {/*"birthday": "20111003",*/}
//           {/*// "birthday": "2003-07-25T00:00:00.000Z",*/}
//           {/*"city": "Lake Veronicaburgh",*/}
//           {/*"married": false,*/}
//           {/*"index": 7*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Lavon Hilll I",*/}
//           {/*"BMI": 20.57,*/}
//           {/*"age": 12,*/}
//           {/*"birthday": "20111004",*/}
//           {/*// "birthday": "1994-10-26T00:00:00.000Z",*/}
//           {/*"city": "Annatown",*/}
//           {/*"married": true,*/}
//           {/*"index": 12*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Clovis Pagac",*/}
//           {/*"BMI": 24.28,*/}
//           {/*"age": 26,*/}
//           {/*"birthday": "20111005",*/}
//           {/*// "birthday": "1995-11-10T00:00:00.000Z",*/}
//           {/*"city": "South Eldredtown",*/}
//           {/*"married": false,*/}
//           {/*"index": 14*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Gaylord Paucek",*/}
//           {/*"BMI": 24.41,*/}
//           {/*"age": 30,*/}
//           {/*"birthday": "20111006",*/}
//           {/*// "birthday": "1975-06-12T00:00:00.000Z",*/}
//           {/*"city": "Koeppchester",*/}
//           {/*"married": true,*/}
//           {/*"index": 5*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Ashlynn Kuhn MD",*/}
//           {/*"BMI": 23.77,*/}
//           {/*"age": 32,*/}
//           {/*"birthday": "20111007",*/}
//           {/*// "birthday": "1985-08-09T00:00:00.000Z",*/}
//           {/*"city": "West Josiemouth",*/}
//           {/*"married": false,*/}
//           {/*"index": 6*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Fern Schmeler IV",*/}
//           {/*"BMI": 27.33,*/}
//           {/*"age": 26,*/}
//           {/*"birthday": "20111008",*/}
//           {/*// "birthday": "2005-02-10T00:00:00.000Z",*/}
//           {/*"city": "West Abigaleside",*/}
//           {/*"married": true,*/}
//           {/*"index": 17*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Enid Weber",*/}
//           {/*"BMI": 18.72,*/}
//           {/*"age": 17,*/}
//           {/*"birthday": "20111009",*/}
//           {/*// "birthday": "1998-11-30T00:00:00.000Z",*/}
//           {/*"city": "Zackton",*/}
//           {/*"married": true,*/}
//           {/*"index": 18*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Leatha O'Hara",*/}
//           {/*"BMI": 17.68,*/}
//           {/*"age": 42,*/}
//           {/*"birthday": "20111010",*/}
//           {/*// "birthday": "2010-10-17T00:00:00.000Z",*/}
//           {/*"city": "Lake Matilda",*/}
//           {/*"married": false,*/}
//           {/*"index": 9*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Korbin Steuber",*/}
//           {/*"BMI": 16.35,*/}
//           {/*"age": 39,*/}
//           {/*"birthday": "20111011",*/}
//           {/*// "birthday": "1975-06-30T00:00:00.000Z",*/}
//           {/*"city": "East Armandofort",*/}
//           {/*"married": true,*/}
//           {/*"index": 10*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Brennon Torphy",*/}
//           {/*"BMI": 27.37,*/}
//           {/*"age": 24,*/}
//           {/*"birthday": "20111012",*/}
//           {/*// "birthday": "2003-10-21T00:00:00.000Z",*/}
//           {/*"city": "Croninfort",*/}
//           {/*"married": true,*/}
//           {/*"index": 11*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Ms. Genoveva Bradtke",*/}
//           {/*"BMI": 28.63,*/}
//           {/*"age": 19,*/}
//           {/*"birthday": "20111013",*/}
//           {/*// "birthday": "1983-01-10T00:00:00.000Z",*/}
//           {/*"city": "Port Emanuel",*/}
//           {/*"married": true,*/}
//           {/*"index": 2*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Gregg Halvorson",*/}
//           {/*"BMI": 15.45,*/}
//           {/*"age": 15,*/}
//           {/*"birthday": "20111014",*/}
//           {/*// "birthday": "2004-06-15T00:00:00.000Z",*/}
//           {/*"city": "Lake Angelinastad",*/}
//           {/*"married": false,*/}
//           {/*"index": 3*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Mr. Sabina Schroeder III",*/}
//           {/*"BMI": 24.27,*/}
//           {/*"age": 26,*/}
//           {/*"birthday": "20111015",*/}
//           {/*// "birthday": "1980-11-22T00:00:00.000Z",*/}
//           {/*"city": "Toyview",*/}
//           {/*"married": true,*/}
//           {/*"index": 4*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Alanna Mitchell",*/}
//           {/*"BMI": 29.25,*/}
//           {/*"age": 37,*/}
//           {/*"birthday": "20111016",*/}
//           {/*// "birthday": "1971-08-04T00:00:00.000Z",*/}
//           {/*"city": "Lake Monserratmouth",*/}
//           {/*"married": false,*/}
//           {/*"index": 22*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Ronny Sanford",*/}
//           {/*"BMI": 29.16,*/}
//           {/*"age": 24,*/}
//           {/*"birthday": "20111017",*/}
//           {/*// "birthday": "1994-11-24T00:00:00.000Z",*/}
//           {/*"city": "New Claudhaven",*/}
//           {/*"married": false,*/}
//           {/*"index": 27*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Emmitt Pouros",*/}
//           {/*"BMI": 27.95,*/}
//           {/*"age": 14,*/}
//           {/*"birthday": "20111018",*/}
//           {/*// "birthday": "1989-04-04T00:00:00.000Z",*/}
//           {/*"city": "Moorefurt",*/}
//           {/*"married": true,*/}
//           {/*"index": 17*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Earl Purdy",*/}
//           {/*"BMI": 18.34,*/}
//           {/*"age": 38,*/}
//           {/*"birthday": "20111019",*/}
//           {/*// "birthday": "2013-04-03T00:00:00.000Z",*/}
//           {/*"city": "Lake Rowanberg",*/}
//           {/*"married": true,*/}
//           {/*"index": 18*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Cordelia Klocko",*/}
//           {/*"BMI": 25.85,*/}
//           {/*"age": 36,*/}
//           {/*"birthday": "20111020",*/}
//           {/*// "birthday": "2011-01-17T00:00:00.000Z",*/}
//           {/*"city": "Lakinchester",*/}
//           {/*"married": true,*/}
//           {/*"index": 9*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Guido Conroy",*/}
//           {/*"BMI": 25.17,*/}
//           {/*"age": 39,*/}
//           {/*"birthday": "20111021",*/}
//           {/*// "birthday": "1977-04-20T00:00:00.000Z",*/}
//           {/*"city": "Scarlettland",*/}
//           {/*"married": true,*/}
//           {/*"index": 20*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Miss Demond Weissnat V",*/}
//           {/*"BMI": 21.44,*/}
//           {/*"age": 19,*/}
//           {/*"birthday": "20111022",*/}
//           {/*// "birthday": "2007-06-09T00:00:00.000Z",*/}
//           {/*"city": "Savionberg",*/}
//           {/*"married": false,*/}
//           {/*"index": 21*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Easton Mante",*/}
//           {/*"BMI": 20.61,*/}
//           {/*"age": 43,*/}
//           {/*"birthday": "20111023",*/}
//           {/*// "birthday": "2007-01-29T00:00:00.000Z",*/}
//           {/*"city": "Kutchberg",*/}
//           {/*"married": false,*/}
//           {/*"index": 22*/}
//         {/*},*/}
//         {/*{*/}
//           {/*"name": "Dayton Ebert",*/}
//           {/*"BMI": 29.88,*/}
//           {/*"age": 20,*/}
//           {/*"birthday": "20111024",*/}
//           {/*// "birthday": "1978-04-27T00:00:00.000Z",*/}
//           {/*"city": "West Wiley",*/}
//           {/*"married": true,*/}
//           {/*"index": 23*/}
//         {/*}*/}
//       {/*]*/}
//     {/*};*/}
//   {/*};*/}
//
//   {/*componentWillReceiveProps(nextProps){*/}
//     {/*if (nextProps.width != this.props.width || nextProps.height != this.props.height ) {*/}
//       {/*this.setState({*/}
//         {/*size: {*/}
//           {/*w: nextProps.width,*/}
//           {/*h: nextProps.height*/}
//         {/*},*/}
//       {/*})*/}
//     {/*}*/}
//   {/*};*/}
//
//   {/*render() {*/}
//     {/*const width = this.state.size.w;*/}
//     {/*const height = this.state.size.h - 100;*/}
//     {/*const margins = {left: 100, right: 100, top: 50, bottom: 50};*/}
//     {/*const data = this.state.data;*/}
//     {/*const chartSeries = [*/}
//       {/*{*/}
//         {/*field: 'BMI',*/}
//         {/*name: 'BMI',*/}
//         {/*color: '#ff7f0e',*/}
//         {/*symbol: 'diamond',*/}
//         {/*symbolSize: 6,*/}
//         {/*style: {*/}
//           {/*"strokeWidth": 2,*/}
//           {/*"strokeOpacity": .9,*/}
//           {/*"fillOpacity": .9,*/}
//         {/*}*/}
//       {/*},*/}
//       {/*{*/}
//         {/*field: 'age',*/}
//         {/*name: 'AGE',*/}
//         {/*color: 'rgba(30,136,229,0.7)',*/}
//         {/*symbol: 'cross',*/}
//         {/*symbolSize: 6,*/}
//         {/*style: {*/}
//           {/*"strokeWidth": 2,*/}
//           {/*"strokeOpacity": .9,*/}
//           {/*"fillOpacity": .9*/}
//         {/*}*/}
//       {/*},*/}
//       {/*{*/}
//         {/*field: 'index',*/}
//         {/*name: 'INDEX',*/}
//         {/*color: '#e53935',*/}
//         {/*symbol: 'circle',*/}
//         {/*symbolSize: 6,*/}
//         {/*style: {*/}
//           {/*"strokeWidth": 2,*/}
//           {/*"strokeOpacity": .9,*/}
//           {/*"fillOpacity": .9*/}
//         {/*}*/}
//       {/*}*/}
//     {/*];*/}
//     {/*const parseDate = d3.time.format("%Y%m%d").parse;*/}
//     {/*const x = (d) => parseDate(d["birthday"]);*/}
//     {/*const xScale = 'time';*/}
//     {/*const interpolate = 'monotone';*/}
//
//     {/*return (*/}
//       {/*<LineChart*/}
//         {/*showLegend={true}*/}
//         {/*width={width}*/}
//         {/*height={height}*/}
//         {/*//margin={margins}*/}
//         {/*data={data}*/}
//         {/*chartSeries={chartSeries}*/}
//         {/*x={x}*/}
//         {/*xScale={xScale}*/}
//         {/*showXAxis={true}*/}
//         {/*showYAxis={true}*/}
//         {/*showXGrid= {true}*/}
//         {/*showYGrid= {true}*/}
//         {/*xOrient="bottom"*/}
//         {/*xTickOrient="bottom"*/}
//         {/*xLabel = "Дати"*/}
//         {/*yOrient = "left"*/}
//         {/*yTickOrient = "left"*/}
//         {/*yLabel = "Значення"*/}
//       {/*/>*/}
//     {/*);*/}
//   {/*}*/}
// {/*}*/}
