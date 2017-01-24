import classes from './dashboard.scss';
import React from 'react';
import {browserHistory} from 'react-router';

import IconUsers from 'material-ui/svg-icons/social/person';
import RaisedButton from 'material-ui/RaisedButton';

import Page from '../../../page';

export default class Dashboard extends React.Component {

  render() {
    const styles = {
      button: {
        margin: '10px 0 10px 0'
      },
      label: {
        fontSize: '20px',
        lineHeight: '36px'
      }
    };

    return (
      <Page headline="Панель керування" label="Засоби адміністрування для управління контентом">

        <section className={classes.dashboard}>

          <RaisedButton
            label="Користувачі"
            style={styles.button}
            labelStyle={styles.label}
            labelColor="#37474F"
            backgroundColor="#ffffff"
            icon={<IconUsers />}
            onTouchTap={() => browserHistory.push('/dashboard/users')}
          />
          <br />
          
        </section>

      </Page>
    );
  }
}
