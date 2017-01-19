import React from 'react';
import {connect} from 'react-redux';
import {getAll} from '../../redux/users/users.actions';

import _Users from '../../components/routes/admin/users';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(getAll());
  }

  render() {
    return (
      <_Users {...this.props} />
    );
  }
}

const selector = (state) => ({users: state.users});

export default connect(selector)(Users);
