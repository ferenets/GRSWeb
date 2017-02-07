import classes from './points-map.scss';
import React from 'react';
import Button from '../buttons/button.jsx';
import Map from './map/map.jsx';
import GraphC from './d3/d3-2.jsx'
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
console.log(dataGraph);
    const {containerSize:{w, h}} = this.state;
    // const styles = {
    //   headline: {
    //     fontSize: 20,
    //     fontWeight: 900,
    //     textAlign: 'center',
    //   }
    // };

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

          <Tab label="Графіки D3" className={classes.tabLabel} value="graphA">
            {loadingGraph
              ? <Loading />
              : <GraphC
                  dataGraph={dataGraph}
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

PointsMap.PropTypes = {
  onButtonClick: React.PropTypes.func.isRequired,
  fullWidth: React.PropTypes.bool.isRequired,
  targetPoints: React.PropTypes.array.isRequired,
};
