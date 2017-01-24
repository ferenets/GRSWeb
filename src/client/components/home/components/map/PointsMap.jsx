import classes from './PointsMap.scss';
import React from 'react';
import Constants from '../../../../containers/root/constants.scss';
import Button from '../buttons/Button.jsx';

export default class PointsMap extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      height: 'auto',
      open: false,
      buttonState: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open != this.props.open) {
      this.setState({
        open: !nextProps.open,
      })
    }
    else {
      this.setState({
        open: !this.props.open,
      })
    }
  }

  componentDidMount() {
    const headerHeight = Constants['headerHeight'].slice(0, -2);
    const footerHeight = Constants['footerHeight'].slice(0, -2);
    const padding = Constants['paddingInnerHomeWrap'].slice(0, -2);
    const height = window.innerHeight - headerHeight - footerHeight - padding*2;

    this.setState({
      height: height +'px',
    });
  }
  render () {
    const openList = {
      height: this.state.height,
      width: 100 + '%',
    };
    const closeList = {
      height: this.state.height,
    };
    return (
      <div
        className={classes.pointsMap}
        style={this.state.open ? openList : closeList}
      >
        {
          this.state.open
          ? <Button
            open={false}
            float={"left"}
            triggerBox={this.props.triggerBox}
            />
          : null
        }
      </div>
    );
  }
}
