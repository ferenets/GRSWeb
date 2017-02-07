import classes from './points-map.scss';
import React from 'react';
import Button from '../buttons/button.jsx';
import Map from './map/map.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class PointsMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render () {
    const {
      onButtonClick,
      fullWidth,
      targetPoints
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

        <Tabs className={classes.tabsWrap} >

          <Tab label="Мапа" className={classes.tabLabel} >
            <Map targetPoints={targetPoints} />
          </Tab>

          <Tab label="Графіки D3" className={classes.tabLabel} >
            <h2 style={styles.headline}>Графіки 1</h2>
          </Tab>

          <Tab label="Графіки D3" className={classes.tabLabel} >
            <h2 style={styles.headline}>Графіки 2</h2>
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