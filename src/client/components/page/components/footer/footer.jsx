import classes from './footer.scss';
import React from 'react';

export default class Footer extends React.Component {
  render () {
    return (
      <div className={classes.footer}>
        <div className={classes.info}>
          Copyright © 2017 GRS WEB. All rights reserved
        </div>
      </div>
    );
  }
}
