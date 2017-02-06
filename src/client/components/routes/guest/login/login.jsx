import classes from './login.scss';
import React from 'react';
import {browserHistory} from 'react-router';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Page from '../../../page';
import TextInput from '../../../inputs/text-input';
import Dialog from '../../../info/dialog';
import ShadowBox from '../../../../components/gui/shadow-box';

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
      onChangeLogin,
      onChangePassword,
      onSubmit,
      login:{
        login,
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
            <ShadowBox>
              <div className={classes.content}>

                <div className={classes.caption}>
                  Авторизація
                </div>

                <form action="./" onSubmit={onSubmit}>

                  <div className={classes.input}>
                    <TextInput
                      placeholder="Ім'я користувача"
                      type="text"
                      value={login}
                      onChange={onChangeLogin}
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
            </ShadowBox>
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

Login.propTypes = {
  onCloseDialog: React.PropTypes.func.isRequired,
  onChangeLogin: React.PropTypes.func.isRequired,
  onChangePassword: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  login: React.PropTypes.object.isRequired
};
