import classes from './users.scss';
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import Page from '../../../page';
import Loading from '../../../info/loading';
import SnackBar from '../../../info/snackbar';

import UsersTable from './components/users-table';
import UserEditor from './components/user-editor';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      onOpenEditor,
      onCloseEditor,
      onChangeLogin,
      onChangeField,
      onToggleUpdatePassword,
      onChangePassword,
      onChangeConfirmPassword,
      onCloseSnackbar,
      onSubmitUser,
      onRemoveUser,
      users: { 
        users,
        usersLoaded,
        editorStarted,
        snackbarIsOpen,
        msg,
        err
      }
    } = this.props;

    return (
      <Page headline="Користувачі">
        <div className={classes.users}>

          <div className={classes.buttons}>
            <div className={classes.button}>
              <RaisedButton
                label="Додати користувача"
                primary={true}
                onClick={() => onOpenEditor(false, '', '', '')}
              />
            </div>
          </div>

          {editorStarted
            ? <UserEditor
                onCloseEditor={onCloseEditor}
                onChangeLogin={onChangeLogin}
                onChangeField={onChangeField}
                onToggleUpdatePassword={onToggleUpdatePassword}
                onChangePassword={onChangePassword}
                onChangeConfirmPassword={onChangeConfirmPassword}
                onSubmitUser={onSubmitUser}
                users={this.props.users}
              />
            : null
          }

          {usersLoaded
            ? <UsersTable
                onOpenEditor={onOpenEditor}
                onRemoveUser={onRemoveUser}
                users={users}
              />
            : <Loading />
          }

          <SnackBar
            error={err}
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
  onOpenEditor: React.PropTypes.func.isRequired,
  onCloseEditor: React.PropTypes.func.isRequired,
  onChangeLogin: React.PropTypes.func.isRequired,
  onChangeField: React.PropTypes.func.isRequired,
  onToggleUpdatePassword: React.PropTypes.func.isRequired,
  onChangePassword: React.PropTypes.func.isRequired,
  onChangeConfirmPassword: React.PropTypes.func.isRequired,
  onCloseSnackbar: React.PropTypes.func.isRequired,
  onSubmitUser: React.PropTypes.func.isRequired,
  onRemoveUser: React.PropTypes.func.isRequired,
  users: React.PropTypes.object.isRequired,
};
