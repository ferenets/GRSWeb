import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class Loading extends React.Component {
  render() {
    const centerStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      zIndex: 2
    };

    return (
      <div className="loading">
        <CircularProgress
          style={centerStyle}
          size={120}
          thickness={7}
        />
      </div>
    );
  }
}