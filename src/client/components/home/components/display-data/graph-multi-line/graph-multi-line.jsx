import classes from './graph-multi-line.scss';
import React from 'react';
import GraphMenu from '../graph-menu/graph-menu.jsx';
import {
  _dataGraph,
  data_daily,
  data_hourly,
  data_moment,
  parseDate,
  convertDate,
  binarySearch
} from '../../../../../utils/constants.js';

import _ from 'lodash';

import * as Tooltip from 'react-d3-tooltip';
const {LineTooltip, SimpleTooltip} = Tooltip;

import * as reactShape from 'react-d3-shape';
const {MultiLineBrushChart} = reactShape;

export default class GraphMultiLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: {
        w: props.width,
        h: props.height
      },
      margins: {left: 50, right: 50, top: 20, bottom: 20},
      marginsBrush: {left: 50, right: 50, top: 5, bottom: 20},
      data: [],
      xAxisLabel: '',
      dataSelectedGraph: '',
      selectedDataGraph: '',
      selectedGraphConstant: '',
      xDataSelectLabel: '',
      xDomain: [],
      yDomain: [],
      yDomainBrush: [],
      brushExtent: [],
      xRange: [0, props.width - 100], //[0, width - margins.left - margins.right]
      startBrushDate: "",
      endBrushDate: ""
    };

    this.handleChangeDomain = this.handleChangeDomain.bind(this);
    this.handleChangeDataDisplay = this.handleChangeDataDisplay.bind(this);
    this.handleChangeGraphDisplay = this.handleChangeGraphDisplay.bind(this);
    this.setYAxisDomain = this.setYAxisDomain.bind(this);
    this.selectTableRange = this.selectTableRange.bind(this);
  };

  selectTableRange(startDate, endDate) {
    const {data, xDataSelectLabel} = this.state;

    let startIndex = binarySearch(startDate, data, xDataSelectLabel);
    let endIndex = binarySearch(endDate, data, xDataSelectLabel);

    if (startIndex > 0) --startIndex;
    if (endIndex < data.length-1) ++endIndex;

    return data.slice(startIndex, endIndex);
  };

  componentDidMount(){
    const {dataGraph} = this.props,
    data = dataGraph["data_daily"],
    x = (d) => parseDate(d["DAY"]),
    yDomain = this.setYAxisDomain(data, "TEMPERATURE");

    const {handleChangeTableRange} = this.props;
    const startDate = data[0]["DAY"];
    const endDate = data[data.length - 1]["DAY"];

    this.setState({
      data,
      xAxisLabel: "Денні дані",
      selectedDataGraph: "data_daily",
      selectedGraphConstant: data_daily,
      dataSelectedGraph: "TEMPERATURE",
      xDomain: d3.extent(data, x),
      brushExtent: d3.extent(data, x),
      xDataSelectLabel: "DAY",
      yDomain,
      yDomainBrush: yDomain,
      startBrushDate: startDate,
      endBrushDate: endDate
    }, () => {
      const {selectedDataGraph, xDataSelectLabel} = this.state;
      const resultRange = this.selectTableRange(startDate, endDate);
      handleChangeTableRange(resultRange, selectedDataGraph, xDataSelectLabel);
    });

  };

  setYAxisDomain(selectedDataArr, prop){
    const draftArr = [];
    selectedDataArr.map(row => draftArr.push(row[prop]));
    return [_.min(draftArr), _.max(draftArr)];
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

  handleChangeDataDisplay(selectedDataGraph){
    const {dataGraph, handleChangeTableRange} = this.props,
    xAxisLabel = _dataGraph[selectedDataGraph];
    let dateLabel = "";
    let selectedConstant = "";

    switch (selectedDataGraph) {
      case "data_daily":
        dateLabel="DAY";
        selectedConstant = data_daily;
        break;
      case "data_hourly":
        dateLabel="DAY_HOUR";
        selectedConstant = data_hourly;
        break;
      case "data_moment":
        dateLabel="DT_DATA";
        selectedConstant = data_moment;
        break;
    }

    const x = (d) => parseDate(d[dateLabel]),
      data = dataGraph[selectedDataGraph],
      yDomain = this.setYAxisDomain(data, "TEMPERATURE");

    this.setState({
      data: data,
      selectedDataGraph,
      dataSelectedGraph: "TEMPERATURE",
      selectedGraphConstant: selectedConstant,
      xAxisLabel,
      xDomain: d3.extent(data, x),
      brushExtent: d3.extent(data, x),
      xDataSelectLabel: dateLabel,
      yDomain,
      yDomainBrush: yDomain,
    }, () => {
      const {selectedDataGraph, xDataSelectLabel} = this.state;
      const startDate = data[0][xDataSelectLabel];
      const endDate = data[data.length - 1][xDataSelectLabel];
      this.setState({
        startBrushDate: startDate,
        endBrushDate: endDate,
      });
      const resultRange = this.selectTableRange(startDate, endDate);
      handleChangeTableRange(resultRange, selectedDataGraph, xDataSelectLabel);
    });

  };

  handleChangeGraphDisplay(selectedGraph) {
    const {data, selectedDataGraph, xDataSelectLabel, startBrushDate, endBrushDate} = this.state;
    const {handleChangeTableRange} = this.props;

    const resultRange = this.selectTableRange(startBrushDate, endBrushDate);

    const yDomain = this.setYAxisDomain(resultRange, selectedGraph);
    const yDomainBrush = this.setYAxisDomain(data, selectedGraph);

    handleChangeTableRange(resultRange, selectedDataGraph, xDataSelectLabel);

    this.setState({
      dataSelectedGraph: selectedGraph,
      yDomain,
      yDomainBrush
    });
  };

  handleChangeDomain(axis, val) {
    if(axis === "x"){

      const {selectedDataGraph, xDataSelectLabel, dataSelectedGraph} = this.state;
      const {handleChangeTableRange} = this.props;

      const startDate = convertDate(val[0]);
      const endDate = convertDate(val[1]);

      const resultRange = this.selectTableRange(startDate, endDate);

      const yDomain = this.setYAxisDomain(resultRange, dataSelectedGraph);

      this.setState({
        xDomain: val,
        brushExtent: val,
        yDomain,
        startBrushDate: startDate,
        endBrushDate: endDate,
      });

      handleChangeTableRange(resultRange, selectedDataGraph, xDataSelectLabel);
    }
  };

  render() {
    const {pointTitle} = this.props;
    const {
      size,
      data,
      margins,
      marginsBrush,
      xDomain,
      brushExtent,
      xDataSelectLabel,
      dataSelectedGraph,
      selectedGraphConstant,
      yDomain,
      yDomainBrush,
    } = this.state;

    const legendName = selectedGraphConstant[dataSelectedGraph];
    const legendColor = "rgba(30,136,229,0.7)";
    const chartSeries = [{
        field: dataSelectedGraph,
        name: legendName,
        color: legendColor,
        style: {
          "strokeWidth": 2,
          "strokeOpacity": .9,
          "fillOpacity": .9
        }
      }],
      width = size.w - 10,
      height = size.h - 200,
      brushHeight = 70,
      x = (d) => parseDate(d[xDataSelectLabel]),
      id = "line-chart";

    const tooltip_bkg_style = {
      backgroundColor: "rgba(50, 50, 50, 0.8)",
      borderRadius: "4px",
      padding: "10px",
      border: "0"
    };

    const brushStyle = {
      "fill": "#DDD",
      "fill-opacity": ".75",
      "shape-rendering": "crispEdges"
    };

    return (
      <div className={classes.graphWrap} >

        <div className={classes.dropDownMenuGraph} >

          <div className={classes.legendPointGraph} >
            <span> {pointTitle} </span>
          </div>

          <GraphMenu
            dataGraphLabel={_dataGraph}
            handleChangeGraphicDisplay={this.handleChangeDataDisplay}
            title="Категорія даних"
          />

          <GraphMenu
            dataGraphLabel={selectedGraphConstant}
            handleChangeGraphicDisplay={this.handleChangeGraphDisplay}
            title="Дані графіку"
          />

        </div>

        <div className={classes.graph}>
          <LineTooltip
            id={id}
            data={data}
            chartSeries={chartSeries}
            width={width}
            height={height}
            margins={margins}
            showLegend="true"
            legendClassName="graphLegend"
            legendPosition="right"
            x={x}
            xScale="time"
            xDomain={xDomain}
            xScaleChange={true}
            xLabel={false}
            showXAxis={true}
            yLabel={false}
            interpolate="monotone"
            showYAxis={true}
            yDomain={yDomain}
          >
            <SimpleTooltip style={tooltip_bkg_style} />
          </LineTooltip>
        </div>

        <div className={classes.brush}>
          <MultiLineBrushChart
            width={width}
            height={brushHeight}
            data={data}
            chartSeries={chartSeries}
            margins={marginsBrush}
            xScale="time"
            x={x}
            isBrushable={true}
            showLegend={false}
            onBrushDomainChange={this.handleChangeDomain}
            keepBrushOn={true}
            brushStyle={brushStyle}
            showXGrid={false}
            showYGrid={false}
            yTicks={[0]}
            brushExtent={brushExtent}
            yDomain={yDomainBrush}
          />
        </div>

      </div>
    );
  }
}

GraphMultiLine.PropTypes = {
  dataGraph: React.PropTypes.array.isRequired,
  selectDataGraph: React.PropTypes.array.isRequired,
  pointTitle: React.PropTypes.string.isRequired,
  handleChangeTableRange: React.PropTypes.func.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};
