import classes from './login.scss';
import React from 'react';
import {browserHistory} from 'react-router';
import {
  changeLoginEmail,
  changeLoginPassword,
  closeLoginDialog,
} from '../../../../redux/login/login.actions';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Page from '../../../page';
import TextInput from '../../../text-input';
import Dialog from '../../../dialog';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.closeDialog = this.closeDialog.bind(this);
  }

  closeDialog() {
    const {dispatch, loginForm:{err}} = this.props;

    dispatch(closeLoginDialog());

    if (!err) browserHistory.push('/');
  }

  render() {
    const {
      dispatch,
      onSubmit,
      loginForm:{
        email,
        pwd,
        loading,
        dialogIsOpen,
        dialogMsg,
        err
      }
    } = this.props;

    const actions = [
      <FlatButton
        key={0}
        label="Ok"
        keyboardFocused={true}
        onTouchTap={this.closeDialog}
      />
    ];

    return (
      <Page>

        <div className={classes.login}>

            <div className={classes.content}>

              <div className={classes.caption}>
                Log In
              </div>

              <form action="./" onSubmit={onSubmit}>

                <div className={classes.input}>
                  <TextInput
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(v) => dispatch(changeLoginEmail(v))}
                    required
                  />
                </div>

                <div className={classes.input}>
                  <TextInput
                    placeholder="Password"
                    type="password"
                    value={pwd}
                    onChange={(v) => dispatch(changeLoginPassword(v))}
                    required
                  />
                </div>

                <div className={classes.submit}>
                  <RaisedButton
                    label={loading ? "Processing..." : "Log In"}
                    type="submit"
                    backgroundColor="#13a7e7"
                    labelColor="#ffffff"
                    disabled={loading}
                  />
                </div>

              </form>

            </div>

        </div>

        <Dialog
          title="Log In"
          actions={actions}
          open={dialogIsOpen}
          modal={false}
          onRequestClose={this.closeDialog}
          msg={dialogMsg}
          err={err}
        />

      </Page>
    );
  }
}
