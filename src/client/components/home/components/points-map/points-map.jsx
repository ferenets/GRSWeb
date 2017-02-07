import classes from './points-map.scss';
import React from 'react';
import Button from '../buttons/button.jsx';
import Map from './map/map.jsx';
import DailyGraph from './d3/d3.jsx'
import HourlyGraph from './d3/d3-1.jsx'
//import MomentGraph from './d3/d3-2.jsx'
import {Tabs, Tab} from 'material-ui/Tabs';
import Loading from '../../../../components/info/loading';

export default class PointsMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'b',
      containerSize: {
        w: 0,
        h: 0
      }
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.dataPrepare = this.dataPrepare.bind(this);
  };

  handleChangeTab(value) {
    const {handleChangeTab} = this.props;
    handleChangeTab(value);
  };

  componentDidMount(){
    this.setState({
      containerSize: {
        w: this.refs.containerWrap.offsetWidth,
        h: this.refs.containerWrap.offsetHeight
      }
    })
  };

  componentDidUpdate(prevProps){
    if (prevProps.fullWidth != this.props.fullWidth) {
      this.setState({
        containerSize: {
          w: this.refs.containerWrap.offsetWidth,
          h: this.refs.containerWrap.offsetHeight
        }
      })
    }
  };

  dataPrepare(){
    let {dataGraph} = this.props;
    dataGraph["data_moment"]["TEMPERATURE"]["values"].map(row => row.x = new Date(row.x));
    //console.log(dataGraph);
    return dataGraph;
  };

  render () {
    const {
      onButtonClick,
      fullWidth,
      targetPoints,
      openTab,
      handleChangeTab,
      dataGraph,
      loadingGraph
    } = this.props;

    const styles = {
      headline: {
        fontSize: 20,
        fontWeight: 900,
        textAlign: 'center',
      }
    };

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

        <Tabs
          className={classes.tabsWrap}
          value={openTab}
          onChange={this.handleChangeTab}
        >

          <Tab label="Мапа" className={classes.tabLabel} value="map">
            <Map targetPoints={targetPoints} handleChangeTab={handleChangeTab} />
          </Tab>

          <Tab label="Графіки D3" className={classes.tabLabel} value="graphA">
            {loadingGraph
              ? <Loading />
              : <DailyGraph
                  dataGraph={this.dataPrepare()}
                  length={dataGraph["data_moment"]["TEMPERATURE"]["values"].length}
                  width={this.state.containerSize.w}
                  height={this.state.containerSize.h}
                />
            }
          </Tab>

          <Tab label="Графіки D3" className={classes.tabLabel} value="graphB">
            {loadingGraph
              ? <Loading />
              : <div></div>//<HourlyGraph
                  //dataGraph={dataGraph}
                  //width={this.state.containerSize.w}
                  //height={this.state.containerSize.h}
                ///>
            }
          </Tab>

          <Tab label="Графіки D3" className={classes.tabLabel} value="graphC">
            {loadingGraph
              ? <Loading />
              : <div></div> //<MomentGraph dataGraph={dataGraph} />
            }

          </Tab>

          <Tab label="Графіки D3" className={classes.tabLabel} value="graphC">
            <h2 style={styles.headline}>Графіки 3</h2>
          </Tab>

        </Tabs>

      </div>
    )
  }
}

PointsMap.PropTypes = {
  onButtonClick: React.PropTypes.func.isRequired,
  fullWidth: React.PropTypes.bool.isRequired,
  targetPoints: React.PropTypes.array.isRequired,
};


//
// {/*<Tab label="Графіки D3" className={classes.tabLabel} value="graphC">*/}
//   {/*{loadingGraph*/}
//       {/*? <Loading />*/}
//     {/*: <div></div> //<MomentGraph dataGraph={dataGraph} />*/}
//   {/*}*/}
// {/*</Tab>*/}