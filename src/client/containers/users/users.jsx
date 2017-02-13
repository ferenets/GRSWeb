import React from 'react';
import {connect} from 'react-redux';
import {
  getUsers,
  openEditor,
  closeEditor,
  changeLogin,
  changeField,
  toggleUpdatePassword,
  changePassword,
  changeConfirmPassword,
  create,
  update,
  remove,
  startLoading,
  closeSnackbar
} from '../../redux/users/users.actions';

import _Users from '../../components/routes/admin/users';

class Users extends React.Component {
  constructor(props) {
    super(props);
    
    this.openEditor = this.openEditor.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.changeLogin = this.changeLogin.bind(this);
    this.changeField = this.changeField.bind(this);
    this.toggleUpdatePassword = this.toggleUpdatePassword.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
    // this.startLoading = this.startLoading.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.submitUser = this.submitUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(getUsers());
  }

  openEditor(editMode, login, fname, sname) {
    this.props.dispatch(openEditor(editMode, login, fname, sname));
  }

  closeEditor() {
    this.props.dispatch(closeEditor());
  }

  changeLogin(v) {
    this.props.dispatch(changeLogin(v));
  }

  changeField(f, v) {
    this.props.dispatch(changeField(f, v));
  }

  toggleUpdatePassword(v) {
    this.props.dispatch(toggleUpdatePassword(v));
  }

  changePassword(v) {
    this.props.dispatch(changePassword(v));
  }

  changeConfirmPassword(v) {
    this.props.dispatch(changeConfirmPassword(v));
  }

  // startLoading() {
  //   this.props.dispatch(startLoading());
  // }

  closeSnackbar() {
    this.props.dispatch(closeSnackbar());
  }

  submitUser(e) {
    e.preventDefault();
    const {
      dispatch,
      users:{
        editorStarted,
        editMode,
        login,
        fname,
        sname,
        updatePassword,
        pwd,
        cpwd,
        submitEnabled,
        loading
      }
    } = this.props;

    if (editorStarted && !loading && submitEnabled) {
      let fdata = {
        login,
        fname,
        sname
      };

      dispatch(startLoading());
      
      if (editMode) {
        fdata.updatePassword = updatePassword;
        if (updatePassword) {
          fdata.pwd = pwd;
          fdata.cpwd = cpwd;
        }
        dispatch(update(fdata));
      } else {
        fdata.pwd = pwd;
        fdata.cpwd = cpwd;
        dispatch(create(fdata));
      }
    }
  }

  removeUser(login) {
    this.props.dispatch(startLoading());
    this.props.dispatch(remove({login}));
  }

  render() {
    return (
      <_Users
        onOpenEditor={this.openEditor}
        onCloseEditor={this.closeEditor}
        onChangeLogin={this.changeLogin}
        onChangeField={this.changeField}
        onToggleUpdatePassword={this.toggleUpdatePassword}
        onChangePassword={this.changePassword}
        onChangeConfirmPassword={this.changeConfirmPassword}
        onCloseSnackbar={this.closeSnackbar}
        onSubmitUser={this.submitUser}
        onRemoveUser={this.removeUser}
        users={this.props.users}
      />
    );
  }
}

Users.PropTypes = {
  dispatch: React.PropTypes.func.isRequired,
  users: React.PropTypes.object.isRequired
};

const selector = (state) => ({users: state.users});

export default connect(selector)(Users);
