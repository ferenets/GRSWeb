import classes from './users-table.scss';
import dateFormat from 'dateformat';
import React from 'react';

import Table from 'material-ui/Table/Table';
import TableHeader from 'material-ui/Table/TableHeader';
import TableBody from 'material-ui/Table/TableBody';
import TableRow from 'material-ui/Table/TableRow';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableRowColumn from 'material-ui/Table/TableRowColumn';

export default class UsersTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {users} = this.props;

    return (
      <div className={classes.usersTable}>

        <Table selectable={false} className={classes.table} bodyStyle={{overflowX: undefined, overflowY: undefined }}>

          <TableHeader adjustForCheckbox={false} displaySelectAll={false} className={classes.th}>
            <TableRow>
              <TableHeaderColumn className={classes.thEmail}>Поштова адреса</TableHeaderColumn>
              <TableHeaderColumn className={classes.thName}>Ім'я</TableHeaderColumn>
              <TableHeaderColumn className={classes.thRole}>Роль</TableHeaderColumn>
              <TableHeaderColumn className={classes.thCreated}>Дата створення</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false} >

            {users.map((user, i) => (
              <TableRow key={i}>

                <TableRowColumn className={classes.tdEmail}>
                  <div className={classes.email}>
                    <span className={classes.email}>
                      {user.email}
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
                    {dateFormat(user.createdAt, "mm/dd/yyyy h:MM:ss TT")}
                  </div>
                </TableRowColumn>

              </TableRow>
            ))}

          </TableBody>
        </Table>

      </div>
    );
  }
}
