import React from 'react';
import classes from './table-data.scss';

export default class TableData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
      sellWidth: 0
    };

    this.fitToParentSize = this.fitToParentSize.bind(this);
  }

  fitToParentSize() {
    const sellWidth = this.refs.headerTh.offsetWidth;
    const divWidth = this.refs.headerDiv.offsetWidth;
    const headerHeight = this.refs.headerBg.offsetHeight;

    //const currentSize = this.state.combinedSize;

    if (sellWidth !== divWidth ||
      sellWidth !== this.state.sellWidth ||
      headerHeight !== this.state.headerHeight) {

      this.setState({
        sellWidth
      })
    }
  };

  componentDidMount() {
    // const {headerHeight, thWidth} = this.state;

    const sellWidth = this.refs.headerTh.offsetWidth;

    this.setState({
      sellWidth
    });

    window.addEventListener('resize', this.fitToParentSize);
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   const sellWidth = this.refs.headerTh.offsetWidth;
  //   const divWidth = this.refs.headerDiv.offsetWidth;
  //   return nextState.sellWidth !== sellWidth;
  // };

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitToParentSize);
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

    const {sellWidth} = this.state;

    const style = {
      sell: {
        width: sellWidth,
      }
    };

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
                          <div ref="headerDiv" style={style.sell}>
                            {row}
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
