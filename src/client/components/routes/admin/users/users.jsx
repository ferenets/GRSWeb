import classes from './users.scss';
import React from 'react';

import Page from '../../../page';
import Loading from '../../../info/loading';
import SnackBar from '../../../info/snackbar';

import UsersTable from './components/users-table';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      onCloseSnackbar,
      users: { users, usersLoaded, snackbarIsOpen, msg, err }
    } = this.props;

    return (
      <Page headline="Користувачі">
        <div className={classes.users}>

          {usersLoaded
            ? <UsersTable users={users} />
            : <Loading />
          }

          <SnackBar
            error={true}
            open={snackbarIsOpen}
            message={msg}
            onRequestClose={onCloseSnackbar}
          />

        </div>
      </Page>
    );
  }
}

Users.propTypes = { 
  onCloseSnackbar: React.PropTypes.func.isRequired,
  users: React.PropTypes.object.isRequired,
};
