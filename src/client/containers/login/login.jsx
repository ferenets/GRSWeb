import React from 'react';
import {connect} from 'react-redux';
import {
  clearLoginInputs,
  startLoginLoading,
  login
} from '../../redux/login/login.actions';

import _Login from '../../components/routes/guest/login';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(clearLoginInputs());
  }

  login(e) {
    const {dispatch, loginForm} = this.props;
    e.preventDefault();
  
    dispatch(startLoginLoading());
    dispatch(login({
      email: loginForm.email,
      pwd: loginForm.pwd
    }));
  }

  render() {
    return (
      <_Login 
        onSubmit={this.login}
        {...this.props}
      />
    );
  }
}

const selector = (state) => ({loginForm: state.login});

export default connect(selector)(Login);
