import classes from './PointsMap.scss';
import React from 'react';
import Button from '../buttons/Button.jsx';

export default class PointsMap extends React.Component {
  render () {
    const {
      height,
      heightPointMap,
      onButtonClick,
      fullWidth
    } = this.props;

    return (
      <div
        className={classes.pointsMap}
        style={
          fullWidth
          ? {height: heightPointMap, width: '100%'}
          : {height: heightPointMap}
        }
      >
        {
          fullWidth
          ? <div className={classes.buttonWrap}>
             <Button
               open={false}
               onClick={onButtonClick}
             />
          </div>
          : null
        }
      </div>
    );
  }
}