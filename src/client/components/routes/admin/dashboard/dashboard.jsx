import classes from './dashboard.scss';
import React from 'react';
import {browserHistory} from 'react-router';

import IconUsers from 'material-ui/svg-icons/social/person';
import IconGroup from 'material-ui/svg-icons/social/group';
import RaisedButton from 'material-ui/RaisedButton';

import Page from '../../../page';

export default class Dashboard extends React.Component {

  render() {
    const styles = {
      button: {
        margin: '10px 0 10px 0'
      },
      label: {
        fontSize: '14px',
        lineHeight: '36px',
        fontWeight: '600'
      }
    };

    return (
      <Page headline="Панель керування" label="Засоби адміністрування для управління контентом">

        <section className={classes.dashboard}>

          <RaisedButton
            label="Користувачі"
            style={styles.button}
            labelStyle={styles.label}
            labelColor="#ffffff"
            backgroundColor="#616161"
            icon={<IconUsers />}
            onTouchTap={() => browserHistory.push('/dashboard/users')}
          />
          <br />

          <RaisedButton
            disabled={true}
            label="Групи користувачів"
            style={styles.button}
            labelStyle={styles.label}
            labelColor="#ffffff"
            backgroundColor="#616161"
            icon={<IconGroup />}
            onTouchTap={() => browserHistory.push('/dashboard/groups')}
          />
          <br />
          
        </section>

      </Page>
    );
  }
}
