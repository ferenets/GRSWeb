import classes from './not-found.scss';
import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <section>
        <h1 className={classes.h1}>404</h1>
      </section>
    );
  }
}
