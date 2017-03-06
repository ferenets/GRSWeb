import React from 'react';
import classes from './table-data.scss';

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.createHeader = this.createHeader.bind(this);
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

    return (

      <div className={classes.dataTableWrap} >
        {tHead != null && tBody != null
        ? <div>

            <h4>{`${pointTitle}. ${tableTitle} данні.`}</h4>
            <p>
              {tableTitle == 'Добові'
                ? `${startDate.slice(0, -6)} - ${endDate.slice(0, -6)}`
                : `${startDate} - ${endDate}`}
            </p>

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
