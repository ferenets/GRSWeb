import classes from './login.scss';
import React from 'react';
import {browserHistory} from 'react-router';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Page from '../../../page';
import TextInput from '../../../inputs/text-input';
import Dialog from '../../../info/dialog';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.closeDialog = this.closeDialog.bind(this);
  }

  closeDialog() {
    const {onCloseDialog, login:{err}} = this.props;

    onCloseDialog();
    if (!err) browserHistory.push('/');
  }

  render() {
    const {
      onChangeEmail,
      onChangePassword,
      onSubmit,
      login:{
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
                Реєстрація
              </div>

              <form action="./" onSubmit={onSubmit}>

                <div className={classes.input}>
                  <TextInput
                    placeholder="Поштова адреса"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                  />
                </div>

                <div className={classes.input}>
                  <TextInput
                    placeholder="Пароль"
                    type="password"
                    value={pwd}
                    onChange={onChangePassword}
                    required
                  />
                </div>

                <div className={classes.submit}>
                  <RaisedButton
                    label={loading ? "Зачекайте..." : "Вхід"}
                    type="submit"
                    primary={true}
                    disabled={loading}
                  />
                </div>

              </form>

            </div>

        </div>

        <Dialog
          title="Вхід"
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
