import classes from './users-table.scss';
import dateFormat from 'dateformat';
import React from 'react';

import Table from 'material-ui/Table/Table';
import TableHeader from 'material-ui/Table/TableHeader';
import TableBody from 'material-ui/Table/TableBody';
import TableRow from 'material-ui/Table/TableRow';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import IconButton from 'material-ui/IconButton';
import IconEdit from 'material-ui/svg-icons/content/create';
import IconRemove from 'material-ui/svg-icons/action/delete-forever';
import ShadowBox from '../../../../../../components/gui/shadow-box';

export default class UsersTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onOpenEditor,
      onRemoveUser,
      users
    } = this.props;

    return (
      <div className={classes.usersTable}>
        
        <ShadowBox>
          <Table selectable={false} className={classes.table} bodyStyle={{overflowX: undefined, overflowY: undefined }}>

            <TableHeader adjustForCheckbox={false} displaySelectAll={false} className={classes.th}>
              <TableRow>
                <TableHeaderColumn className={classes.thUsername}>Ім'я користувача</TableHeaderColumn>
                <TableHeaderColumn className={classes.thName}>Ім'я</TableHeaderColumn>
                <TableHeaderColumn className={classes.thRole}>Роль</TableHeaderColumn>
                <TableHeaderColumn className={classes.thCreated}>Створено</TableHeaderColumn>
                <TableHeaderColumn className={classes.thUpdated}>Змінено</TableHeaderColumn>
                <TableHeaderColumn className={classes.thAction}>Редагувати</TableHeaderColumn>
                <TableHeaderColumn className={classes.thAction}>Видалити</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody displayRowCheckbox={false} >
              {users.map((user, i) => (
                <TableRow key={i}>

                  <TableRowColumn className={classes.tdUsername}>
                    <div className={classes.username}>
                      <span className={classes.username}>
                        {user.login}
                      </span>
                    </div>
                  </TableRowColumn>

                  <TableRowColumn className={classes.tdName}>
                    <div className={classes.name}>
                      {`${user.fname} ${user.sname}`}
                    </div>
                  </TableRowColumn>

                  <TableRowColumn className={classes.tdRole}>
                    <div className={user.role === 'admin' ? classes.admin : classes.role}>
                      {user.role}
                    </div>
                  </TableRowColumn>

                  <TableRowColumn className={classes.tdCreated}>
                    <div className={classes.created}>
                      {dateFormat(user.createdAt, "dd/mm/yyyy HH:MM:ss")}
                    </div>
                  </TableRowColumn>

                  <TableRowColumn className={classes.tdUpdated}>
                    <div className={classes.updated}>
                      {dateFormat(user.updatedAt, "dd/mm/yyyy HH:MM:ss")}
                    </div>
                  </TableRowColumn>

                  <TableRowColumn className={classes.tdAction}>
                    <div className={classes.action}>
                      {user.role !== 'admin'
                        ? <IconButton onTouchTap={() => onOpenEditor(true, user.login, user.fname, user.sname)}>
                            <IconEdit color="#FB8C00"/>
                          </IconButton>
                        : null
                      }
                    </div>
                  </TableRowColumn>

                  <TableRowColumn className={classes.tdAction}>
                    <div className={classes.action}>
                      {user.role !== 'admin'
                        ? <IconButton onTouchTap={() => onRemoveUser(user.login)}>
                            <IconRemove color="#f44336"/>
                          </IconButton>
                        : null
                      }
                    </div>
                  </TableRowColumn>

                </TableRow>
              ))}
            </TableBody>

          </Table>
        </ShadowBox>
      </div>
    );
  }
}
