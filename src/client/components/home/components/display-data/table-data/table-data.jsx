import React from 'react';
import classes from './table-data.scss';
import { RaisedButton } from 'material-ui';
import exportToCsv from '../../../../../utils/exportToCsv.js';

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.exportToCsv = this.exportToCsv.bind(this);
    this.createHeader = this.createHeader.bind(this);
  }

  exportToCsv(){
    exportToCsv(`${this.props.pointTitle} ${this.props.tableData.tableTitle}.csv`, [this.props.tableData.tHead, ...this.props.tableData.tBody])
  }

  createHeader(row){
    return {__html: row.replace(',', ',<br/>')};
  };

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

    const style = {
      margin: 0,
      cursor: 'pointer',
    };

    return (

      <div className={classes.dataTableWrap} >

        {tHead != null && tBody != null
        ? <div>

            <section>
              <div className={classes.titleOfTable} >
                <h4>{`${pointTitle}. ${tableTitle} данні.`}</h4>
                <p>
                  {tableTitle == 'Добові'
                    ? `${startDate.slice(0, -6)} - ${endDate.slice(0, -6)}`
                    : `${startDate} - ${endDate}`}
                </p>
              </div>

              <RaisedButton
                className={classes.exportButton}
                label="Експортувати"
                primary={true}
                style={style}
                onClick={this.exportToCsv}
              />
            </section>

            <section className={classes.sectionDataTable} >

              <div className={classes.backgroundHeader} ref="headerBg" ></div>

              <div className={classes.dataTableScrollWrap} >

                <table className={classes.dataTable} >
                  <thead>
                    <tr>
                      {tHead.map((row, ind) =>
                        <th key={ind} ref="headerTh" >
                          <div
                            ref="headerDiv"
                            dangerouslySetInnerHTML={this.createHeader(row)}
                          >
                          </div>
                        </th>
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
            </section>

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
