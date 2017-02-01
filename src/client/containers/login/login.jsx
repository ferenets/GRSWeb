import React from 'react';
import {connect} from 'react-redux';
import {
  clearInputs,
  startLoading,
  submit,
  changeLogin,
  changePassword,
  closeDialog,
} from '../../redux/login/login.actions';

import _Login from '../../components/routes/guest/login';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.changeLogin = this.changeLogin.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeLogin(login) {
    const {dispatch} = this.props;

    dispatch(changeLogin(login));
  }

  changePassword(pwd) {
    const {dispatch} = this.props;

    dispatch(changePassword(pwd));
  }

  closeDialog() {
    const {dispatch} = this.props;

    dispatch(closeDialog());
  }

  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(clearInputs());
  }

  submit(e) {
    const {dispatch, login:{ login, pwd }} = this.props;
    e.preventDefault();
  
    dispatch(startLoading());
    dispatch(submit({ login, pwd }));
  }

  render() {
    return (
      <_Login
        onChangeLogin={this.changeLogin}
        onChangePassword={this.changePassword}
        onCloseDialog={this.closeDialog}
        onSubmit={this.submit}
        login={this.props.login}
      />
    );
  }
}

Login.PropTypes = {
  dispatch: React.PropTypes.func.isRequired,
  login: React.PropTypes.object.isRequired
};

const selector = (state) => ({login: state.login});

export default connect(selector)(Login);
