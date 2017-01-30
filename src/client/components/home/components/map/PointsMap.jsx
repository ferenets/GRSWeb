import classes from './PointsMap.scss';
import React from 'react';
import Button from '../buttons/Button.jsx';

export default class PointsMap extends React.Component {
  render () {
    const {height, handleFullWidht, fullWidthMap} = this.props;
    const openList = {
      height,
      width: '100%',
    };
    const closeList = {height};
    return (
      <div
        className={classes.pointsMap}
        style={fullWidthMap ? closeList : openList}
      >
        {
            !fullWidthMap
          ? <Button
            open={false}
            float={"left"}
            buttonOnClick={handleFullWidht}
            />
          : null
        }
      </div>
    );
  }
}
