import React from 'react';
import classes from './marker.scss';
import ReactTooltip from 'react-tooltip'

export default class PointMarker extends React.Component {
  render() {
    const {point:{label}} = this.props;
    const id = `t_${label}`;

    return (
      <div className={classes.pointMarker}>
        <img
          src="../../../../../images/marker.svg"
          data-tip="tooltip"
          data-for={id}
        />
        <ReactTooltip
          type="light"
          border={true}
          effect="float"
          place="top"
          id={id}
        >
          {label}
        </ReactTooltip>
      </div>
    )
  }
}

PointMarker.PropTypes = {
  point: React.PropTypes.object.isRequired,
};
