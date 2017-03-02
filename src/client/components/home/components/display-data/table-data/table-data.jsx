import React from 'react';
import classes from './table-data.scss';

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      pointTitle,
      tableData:{
        tableTitle,
        tHead,
        tBody,
        startDate,
        endDate
      }
    } = this.props;

    return (
      <div className={classes.dataTableWrap} >
        {tHead != null && tBody != null
        ? <div>
            <h4>{`${pointTitle}, ${tableTitle} данні, (${startDate} - ${endDate})`}</h4>
            <div className={classes.dataTableScrollWrap} >
              <table className={classes.dataTable} >
                <thead>
                  <tr>
                    {tHead.map((row, ind) =>
                      <td key={ind} >{row}</td>
                    )}
                  </tr>
                </thead>
                <tbody>
                {tBody.map((row, ind) =>
                  <tr key={ind} >
                    {row.map((td, num) => <td key={num+1} >{td}</td> )}
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        : <p>Будь-ласка оберіть дані для відображення</p>
        }
      </div>
    );
  }
}

TableData.PropTypes = {
  pointTitle: React.PropTypes.string.isRequired,
  tableData: React.PropTypes.object.isRequired,
};
