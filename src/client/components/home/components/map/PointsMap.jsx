import classes from './PointsMap.scss';
import React from 'react';
import Button from '../buttons/Button.jsx';

export default class PointsMap extends React.Component {
  render () {
    const {
      onButtonClick,
      fullWidth
    } = this.props;

    return (
      <div
        className={classes.pointsMap}
        style={
          fullWidth
          ? {width: '100%'}
          : null
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
    )
  }
}