import classes from './home.scss';
import React from 'react';
// import {browserHistory, Link} from 'react-router';

import Page from '../../../page';
import Loading from '../../../info/loading';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Page headline="Ласкаво просимо на портал GRS WEB">
          <div className={classes.home}>
            <Loading />
          </div>
        </Page>
    );
  }
}
