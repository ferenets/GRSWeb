import classes from './users.scss';
import React from 'react';
import {closeUsersSnackbar} from '../../../../redux/users/users.actions';

import Page from '../../../page';
import Loading from '../../../loading';
import SnackBar from '../../../snackbar';

import UsersTable from './components/users-table';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      dispatch,
      users: { users, usersLoaded, snackbarIsOpen, msg, err }
    } = this.props;

    return (
      <Page headline="Users">

        <section className={classes.users}>

          {usersLoaded
            ? <UsersTable
                dispatch={dispatch}
                users={users}
              />
            : <Loading />
          }

          <SnackBar
            error={err}
            open={snackbarIsOpen}
            message={msg}
            onRequestClose={() => dispatch(closeUsersSnackbar())}
          />

        </section>
        
      </Page>
    );
  }
}
