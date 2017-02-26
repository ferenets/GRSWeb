import classes from './combined-data.scss';
import React from 'react';
import DayPiker from '../day-piker/day-piker.jsx'

export default class CombinedData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultDate: new Date("Wed Mar 25 2017 02:00:00 GMT+0200 (EET)")
    };
  }

  render() {

    return (
      <div className={classes.pikerWrap} >
        <div>
          <DayPiker />
        </div>
      </div>
    )
  }
}

