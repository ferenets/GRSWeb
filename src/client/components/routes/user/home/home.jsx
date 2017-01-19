import classes from './home.scss';
import React from 'react';
import {browserHistory, Link} from 'react-router';

import Page from '../../../page';
import Loading from '../../../loading';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Page headline="Welcome to GRS WEB portal">
          <div className={classes.home}>
            <Loading />
          </div>
        </Page>
    );
  }
}
