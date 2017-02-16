import classes from './graphLine.scss';
import React from 'react';
import GraphMenu from '../graph-menu/graph-menu.jsx';
import {
  _dataGraph,
  data_daily,
  data_hourly,
  data_moment,
  parseDate,
} from '../../../../../utils/constants.js';

import _ from 'lodash';

import * as Tooltip from 'react-d3-tooltip';
const {LineTooltip} = Tooltip;

import * as reactShape from 'react-d3-shape';
const {MultiLineBrushChart} = reactShape;

export default class GraphLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: {
        w: props.width,
        h: props.height
      },
      margins: {left: 30, right: 30, top: 20, bottom: 20},
      marginsBrush: {left: 30, right: 30, top: 0, bottom: 20},
      data: [],
      xAxisLabel: '',
      dataSelectedGraph: '',
      selectedDataGraph: '',
      selectedGraphConstant: '',
      xDataSelectLabel: '',
      xDomain: [],
      yDomain: [],
      brushExtent: [],
      xRange: [0, props.width - 100], //[0, width - margins.left - margins.right]
    };

    this.handleChangeDomain = this.handleChangeDomain.bind(this);
    this.handleChangeDataDisplay = this.handleChangeDataDisplay.bind(this);
    this.handleChangeGraphDisplay = this.handleChangeGraphDisplay.bind(this);
    this.setYAxisDomain = this.setYAxisDomain.bind(this);
  };

  componentDidMount(){
    const {dataGraph} = this.props,
    data = dataGraph["data_daily"],
    x = (d) => parseDate(d["DAY"]),
    yDomain = this.setYAxisDomain(data, 'TEMPERATURE');

    this.setState({
      data,
      xAxisLabel: 'Денні дані',
      selectedDataGraph: 'data_daily',
      selectedGraphConstant: data_daily,
      dataSelectedGraph: 'TEMPERATURE',
      xDomain: d3.extent(data, x),
      brushExtent: d3.extent(data, x),
      xDataSelectLabel: 'DAY',
      yDomain,
    });
  };

  setYAxisDomain(selectedDataArr, prop){
    const draftArr = [];
    selectedDataArr.map(row => draftArr.push(row[prop]));
    return [_.max(draftArr), _.min(draftArr)];
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
    const {dataGraph} = this.props,
      xAxisLabel = _dataGraph[selectedDataGraph];
    let dateLabel = "";
    let selectedConstant = "";

    switch (selectedDataGraph) {
      case 'data_daily':
        dateLabel="DAY";
        selectedConstant = data_daily;
        break;
      case 'data_hourly':
        dateLabel="DAY_HOUR";
        selectedConstant = data_hourly;
        break;
      case 'data_moment':
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
      dataSelectedGraph: 'TEMPERATURE',
      selectedGraphConstant: selectedConstant,
      xAxisLabel,
      xDomain: d3.extent(data, x),
      brushExtent: d3.extent(data, x),
      xDataSelectLabel: dateLabel,
      yDomain,
    });

  };

  handleChangeGraphDisplay(selectedGraph) {
    const {data} = this.state,
      yDomain = this.setYAxisDomain(data, selectedGraph);

    this.setState({
      dataSelectedGraph: selectedGraph,
      yDomain,
    });
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
      xAxisLabel
    } = this.state,
      chartSeries = [{
        field: dataSelectedGraph,
        name: selectedGraphConstant[dataSelectedGraph],
        color: 'rgba(30,136,229,0.7)',
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

    return (
      <div className={classes.graphWrap} >

        <div className={classes.graph}>
          <LineTooltip
            data={data}
            chartSeries={chartSeries}
            width={width}
            height={height}
            margins={margins}
            x={x}
            xScale='time'
            xDomain={xDomain}
            xScaleChange={true}
            //xLabel={xAxisLabel}
            xLabel={false}
            showXAxis={true}
            xOrient='bottom'
            //gridStyleClassName="gridAxis"
            //yLabel="Значення"
            yLabel={false}
            yLabelPosition="left"
            yOrient="left"
            yTickOrient="left"
            interpolate='monotone'
            id={id}
            showYAxis={true}
            showLegend={false}
            yDomain={yDomain}
          >
          </LineTooltip>
        </div>

        <div className={classes.dropDownMenuGraph} >
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

        <div className={classes.brush}>
          <MultiLineBrushChart
            width={width}
            height={brushHeight}
            data={data}
            chartSeries={chartSeries}
            margins={marginsBrush}
            xScale='time'
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
            //yDomain={yDomain}
          />
        </div>

      </div>
    );
  }
}

