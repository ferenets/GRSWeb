import React from 'react';
import {connect} from 'react-redux';
import {getUsers, closeUsersSnackbar} from '../../redux/users/users.actions';

import _Users from '../../components/routes/admin/users';

class Users extends React.Component {
  constructor(props) {
    super(props);
    
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  closeSnackbar() {
    const {dispatch} = this.props;

    dispatch(closeUsersSnackbar());
  }

  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(getUsers());
  }

  render() {
    return (
      <_Users
        onCloseSnackbar={this.closeSnackbar}
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
