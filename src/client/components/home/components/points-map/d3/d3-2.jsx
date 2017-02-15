import classes from './d3.scss';
import React from 'react';

import * as Tooltip from 'react-d3-tooltip';
const {LineTooltip} = Tooltip;

import * as reactShape from 'react-d3-shape';
const {MultiLineBrushChart} = reactShape;

export default class GraphC extends React.Component {
  constructor(props) {
    super(props);

    const data = [
      {
        "name": "Darron Weissnat IV",
        "BMI": 20.72,
        "age": 39,
        "birthday": "20111001",
        "city": "East Russel",
        "married": false,
        "index": 17
      },
      {
        "name": "Pablo Ondricka",
        "BMI": 19.32,
        "age": 38,
        "birthday": "20111002",
        "city": "Lake Edytheville",
        "married": false,
        "index": 1
      },
      {
        "name": "Mr. Stella Kiehn Jr.",
        "BMI": 16.8,
        "age": 34,
        "birthday": "20111003",
        "city": "Lake Veronicaburgh",
        "married": false,
        "index": 7
      },
      {
        "name": "Lavon Hilll I",
        "BMI": 20.57,
        "age": 12,
        "birthday": "20111004",
        "city": "Annatown",
        "married": true,
        "index": 12
      },
      {
        "name": "Clovis Pagac",
        "BMI": 24.28,
        "age": 26,
        "birthday": "20111005",
        "city": "South Eldredtown",
        "married": false,
        "index": 14
      },
      {
        "name": "Gaylord Paucek",
        "BMI": 24.41,
        "age": 30,
        "birthday": "20111006",
        "city": "Koeppchester",
        "married": true,
        "index": 5
      },
      {
        "name": "Ashlynn Kuhn MD",
        "BMI": 23.77,
        "age": 32,
        "birthday": "20111007",
        "city": "West Josiemouth",
        "married": false,
        "index": 6
      },
      {
        "name": "Fern Schmeler IV",
        "BMI": 27.33,
        "age": 26,
        "birthday": "20111008",
        "city": "West Abigaleside",
        "married": true,
        "index": 17
      },
      {
        "name": "Enid Weber",
        "BMI": 18.72,
        "age": 17,
        "birthday": "20111009",
        "city": "Zackton",
        "married": true,
        "index": 18
      },
      {
        "name": "Leatha O'Hara",
        "BMI": 17.68,
        "age": 42,
        "birthday": "20111010",
        "city": "Lake Matilda",
        "married": false,
        "index": 9
      },
      {
        "name": "Korbin Steuber",
        "BMI": 16.35,
        "age": 39,
        "birthday": "20111011",
        "city": "East Armandofort",
        "married": true,
        "index": 10
      },
      {
        "name": "Brennon Torphy",
        "BMI": 27.37,
        "age": 24,
        "birthday": "20111012",
        "city": "Croninfort",
        "married": true,
        "index": 11
      },
      {
        "name": "Ms. Genoveva Bradtke",
        "BMI": 28.63,
        "age": 19,
        "birthday": "20111013",
        "city": "Port Emanuel",
        "married": true,
        "index": 2
      },
      {
        "name": "Gregg Halvorson",
        "BMI": 15.45,
        "age": 15,
        "birthday": "20111014",
        "city": "Lake Angelinastad",
        "married": false,
        "index": 3
      },
      {
        "name": "Mr. Sabina Schroeder III",
        "BMI": 24.27,
        "age": 26,
        "birthday": "20111015",
        "city": "Toyview",
        "married": true,
        "index": 4
      },
      {
        "name": "Alanna Mitchell",
        "BMI": 29.25,
        "age": 37,
        "birthday": "20111016",
        "city": "Lake Monserratmouth",
        "married": false,
        "index": 22
      },
      {
        "name": "Ronny Sanford",
        "BMI": 29.16,
        "age": 24,
        "birthday": "20111017",
        "city": "New Claudhaven",
        "married": false,
        "index": 27
      },
      {
        "name": "Emmitt Pouros",
        "BMI": 27.95,
        "age": 14,
        "birthday": "20111018",
        "city": "Moorefurt",
        "married": true,
        "index": 17
      },
      {
        "name": "Earl Purdy",
        "BMI": 18.34,
        "age": 38,
        "birthday": "20111019",
        "city": "Lake Rowanberg",
        "married": true,
        "index": 18
      },
      {
        "name": "Cordelia Klocko",
        "BMI": 25.85,
        "age": 36,
        "birthday": "20111020",
        "city": "Lakinchester",
        "married": true,
        "index": 9
      },
      {
        "name": "Guido Conroy",
        "BMI": 25.17,
        "age": 39,
        "birthday": "20111021",
        "city": "Scarlettland",
        "married": true,
        "index": 20
      },
      {
        "name": "Miss Demond Weissnat V",
        "BMI": 21.44,
        "age": 19,
        "birthday": "20111022",
        "city": "Savionberg",
        "married": false,
        "index": 21
      },
      {
        "name": "Easton Mante",
        "BMI": 20.61,
        "age": 43,
        "birthday": "20111023",
        "city": "Kutchberg",
        "married": false,
        "index": 22
      },
      {
        "name": "Dayton Ebert",
        "BMI": 29.88,
        "age": 20,
        "birthday": "20111024",
        "city": "West Wiley",
        "married": true,
        "index": 23
      }
    ];
    const parseDate = d3.time.format("%Y%m%d").parse;
    const x = (d) => parseDate(d["birthday"]);

    this.state = {
      size: {
        w: props.width,
        h: props.height
      },
      data: data,
      margins: {left: 50, right: 30, top: 50, bottom: 50},
      marginsBrush: {left: 50, right: 30, top: 0, bottom: 20},
      xDomain: d3.extent(data, x),
      brushExtent: d3.extent(data, x),
      xRange: [0, props.width - 100], //[0, width - margins.left - margins.right]
    };
    this.handleChangeDomain = this.handleChangeDomain.bind(this);
  };

  componentWillReceiveProps(nextProps){
    if (nextProps.width != this.props.width || nextProps.height != this.props.height ) {
      this.setState({
        size: {
          w: nextProps.width,
          h: nextProps.height
        },
      })
    }
  };

  handleChangeDomain(axis, val) {
    if(axis === 'x'){
      this.setState({
        xDomain: val,
        brushExtent: val,
      })
    }
  };

  render() {
    console.log(this.props.dataGraph);
    const chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e',
        symbol: 'diamond',
        symbolSize: 6,
        style: {
          "strokeWidth": 2,
          "strokeOpacity": .9,
          "fillOpacity": .9,
        }
      },
      {
        field: 'age',
        name: 'AGE',
        color: 'rgba(30,136,229,0.7)',
        symbol: 'cross',
        symbolSize: 6,
        style: {
          "strokeWidth": 2,
          "strokeOpacity": .9,
          "fillOpacity": .9
        }
      },
      {
        field: 'index',
        name: 'INDEX',
        color: '#e53935',
        symbol: 'circle',
        symbolSize: 6,
        style: {
          "strokeWidth": 2,
          "strokeOpacity": .9,
          "fillOpacity": .9
        }
      }
    ];
    const {size, data, margins, marginsBrush, xDomain, brushExtent} = this.state,
    width = size.w,
    height = size.h - 150,
    brushHeight = 70,
    parseDate = d3.time.format("%Y%m%d").parse,
    x = (d) => parseDate(d["birthday"]),
    xScale = 'time',
    yLabelPosition = "left",
    yOrient = "left",
    yTickOrient = "left";

    return (
      <div className={classes.graphWrap} >

        <LineTooltip
          width={width}
          height={height}
          data={data}
          chartSeries={chartSeries}
          margins={margins}
          x={x}
          xScale= {xScale}
          xDomain= {xDomain}
          xScaleChange={true}
          //gridStyleClassName="gridAxis"
          xLabel="Дати"
          yLabel="Значення"
          yLabelPosition={yLabelPosition}
          yOrient={yOrient}
          yTickOrient={yTickOrient}
        >
        </LineTooltip>

        <MultiLineBrushChart
          width={width}
          height={brushHeight}
          data={data}
          chartSeries={chartSeries}
          margins={marginsBrush}
          xScale={xScale}
          x={x}
          isBrushable={true}
          showLegend={false}
          onBrushDomainChange={this.handleChangeDomain}
          keepBrushOn={true}
          brushStyle={{"fill": "#DDD", "fill-opacity": ".75", "shape-rendering": "crispEdges"}}
          //yGridStyleClassName={"yGridStyleCls"}
          //yAxisClassName={"timeSliderYAxis"}
          showXGrid={false}
          showYGrid={false}
          yTicks={[0]}
          brushExtent={brushExtent}
        />

      </div>
    );
  }
}

