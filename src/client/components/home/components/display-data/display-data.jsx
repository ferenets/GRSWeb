import classes from './display-data.scss';
import React from 'react';
import Button from '../buttons/button.jsx';
import Map from './map/map.jsx';
import GraphMultiLine from './graph-multi-line/graph-multi-line.jsx';
import TableData from './table-data/table-data.jsx';
import CombinedData from './combined-data/combined-data.jsx'
import {Tabs, Tab} from 'material-ui/Tabs';
import Loading from '../../../../components/info/loading';

export default class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'b',
      containerSize: {
        w: 0,
        h: 0
      },
      visibile: false
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.fitToParentSize = this.fitToParentSize.bind(this);
    this.tabDisabledMouseOver = this.tabDisabledMouseOver.bind(this);
    this.tabDisabledMouseOut = this.tabDisabledMouseOut.bind(this);
  };

  fitToParentSize() {
    const w = this.refs.containerWrap.offsetWidth;
    const h = this.refs.containerWrap.offsetHeight;
    const currentSize = this.state.containerSize;
    if (w !== currentSize.w || h !== currentSize.h) {
      this.setState({containerSize: {w, h}})
    }
  }

  handleChangeTab(value) {
    const {handleChangeTab} = this.props;
    handleChangeTab(value);
  };

  componentDidMount(){
    window.addEventListener('resize', this.fitToParentSize);
    this.fitToParentSize();
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitToParentSize);
  }

  componentDidUpdate(prevProps){
    if (prevProps.fullWidth != this.props.fullWidth) {
      this.fitToParentSize();
    }
  };

  hoverdiv(e,divid){
    var left  = e.nativeEvent.clientX + 10 + "px";
    var top  = e.nativeEvent.clientY - 10 + "px";

    var div = document.getElementById(divid);

    div.style.left = left;
    div.style.top = top;

    div.style.display == 'none' ? div.style.display = '' : div.style.display = 'none';
    return false;
  }

  tabDisabledMouseOver(e){
    this.props.loadingGraph ? this.hoverdiv(e,'divtoshow') : null;
  }

  tabDisabledMouseOut(e){
    this.props.loadingGraph ? this.hoverdiv(e,'divtoshow') : null;
  }
  
  render (){
    const {
      onButtonClick,
      fullWidth,
      targetPoints,
      openTab,
      handleChangeTab,
      dataGraph,
      loadingGraph,
      selectDataGraph,
      pointTitle,
      handleChangeTableRange,
      tableData,
      handleChangeCombinedRange,
      combinedData
    } = this.props;

    const {containerSize:{w, h}} = this.state;

    return (
      <div
        className={classes.pointsMap}
        ref="containerWrap"
        style={fullWidth ? {width: '100%'} : {}}
      >

        {fullWidth
          ? <div className={classes.buttonWrap}>
              <Button
                open={false}
                onClick={onButtonClick}
              />
            </div>
          : null
        }
        <div id="divtoshow" style={{position: 'fixed',display:'none', 'zIndex': 2, background: 'white', border: '1 solid'}}>Будь ласка, оберіть дані для відображення</div>

        <Tabs
          className={classes.tabsWrap}
          value={openTab}
          onChange={this.handleChangeTab}
        >

          <Tab
            label="Мапа"
            className={classes.tabLabel}
            value="map"
          >
            <Map
              targetPoints={targetPoints}
              handleChangeTab={handleChangeTab}
            />
          </Tab>

          <Tab
            label="Графіки"
            className={classes.tabLabel}
            value="graphA"
            disabled={loadingGraph}
            onMouseOver={this.tabDisabledMouseOver}
            onMouseOut={this.tabDisabledMouseOut}
          >
            {loadingGraph
              ? <Loading />
              : <GraphMultiLine
                  dataGraph={dataGraph}
                  selectDataGraph={selectDataGraph}
                  pointTitle={pointTitle}
                  handleChangeTableRange={handleChangeTableRange}
                  width={w}
                  height={h}
                />
              }
          </Tab>

          <Tab
            label="Таблиця"
            className={classes.tabLabel}
            value="graphB"
            disabled={loadingGraph}
            onMouseOver={this.tabDisabledMouseOver}
            onMouseOut={this.tabDisabledMouseOut}
          >
            {loadingGraph
              ? <Loading />
              : <TableData
                  pointTitle={pointTitle}
                  tableData={tableData}
                />
            }
          </Tab>

          <Tab
            label="Комбіновані"
            className={classes.tabLabel}
            value="graphC"
            disabled={loadingGraph}
            onMouseOver={this.tabDisabledMouseOver}
            onMouseOut={this.tabDisabledMouseOut}
          >
            {loadingGraph
              ? <Loading />
              : <CombinedData
                  dataGraph={dataGraph}
                  handleChangeTableRange={handleChangeCombinedRange}
                  pointTitle={pointTitle}
                  tableData={combinedData}
                  width={w}
                  height={h}
                />
            }
          </Tab>

        </Tabs>

      </div>
    )
  }
}

DisplayData.PropTypes = {
  onButtonClick: React.PropTypes.func.isRequired,
  fullWidth: React.PropTypes.bool.isRequired,
  targetPoints: React.PropTypes.array.isRequired,
  openTab: React.PropTypes.string.isRequired,
  handleChangeTab: React.PropTypes.func.isRequired,
  dataGraph: React.PropTypes.array.isRequired,
  loadingGraph: React.PropTypes.bool.isRequired,
  selectDataGraph: React.PropTypes.array.isRequired,
  pointTitle: React.PropTypes.string.isRequired,
  handleChengeTableRange: React.PropTypes.func.isRequired,
  tableData: React.PropTypes.object.isRequired,
  handleChangeCombinedRange: React.PropTypes.func.isRequired,
  combinedData: React.PropTypes.object.isRequired
};
