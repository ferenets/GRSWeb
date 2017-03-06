import React from 'react';
import classes from './marker.scss';
import ReactTooltip from 'react-tooltip'

export default class PointMarker extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab() {
    const {point:{id, label}, handleChangeTab} = this.props;
    handleChangeTab('graphA', id, label);
  };

  render() {
    const {point:{label}} = this.props;
    const idTooltip = `t_${label}`;

    return (
      <div className={classes.pointMarker} >
        <img
          src="../../../../../images/marker.svg"
          data-tip="tooltip"
          data-for={idTooltip}
          onClick={this.handleChangeTab}
        />
        <ReactTooltip
          type="light"
          border={true}
          effect="float"
          place="top"
          id={idTooltip}
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
