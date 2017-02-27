import classes from './day-piker.scss';
import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';

export default class DayPiker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultDate: ""
    };

    this.handleDisplayData = this.handleDisplayData.bind(this);
  }

  componentDidMount() {
    this.setState({
      defaultDate: this.props.defaultDate
    })
  };

  componentWillReceiveProps(nextProps){
    if (nextProps.defaultDate != this.props.defaultDate) {
      this.setState({
        defaultDate: nextProps.defaultDate
      })
    }
  };

  handleDisplayData(date) {
    const {handleChangeData} = this.props;

    this.setState({
      defaultDate: date
    }, () => handleChangeData(this.state.defaultDate));
  };

  render() {
    const {label, minDate, maxDate} = this.props;
    const {defaultDate} = this.state;

    const localeExample = {
      months: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
      monthsShort: 'січ_лют_бер_квіт_трав_чер_лип_серп_вер_жов_лист_груд'.split('_'),
      weekdays: 'понеділок_вівторок_середа_четвер_п\'ятниця_субота_неділя'.split('_'),
      weekdaysShort: 'пн_вт_ср_чт_пт_сб_нд'.split('_'),
      weekdaysLetter: 'пн_вт_ср_чт_пт_сб_нд'.split('_')
    };

    return (
      <div className={classes.pikerWrap} >
        <DatePicker
          value={defaultDate}
          minDate={minDate}
          maxDate={maxDate}
          formatDate={(d) => new Date(label).toLocaleString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute:"2-digit",
            hour12: false})
          }
          onChange={this.handleDisplayData}
          locale={localeExample}
          className={classes.datePiker}
          label={label}
          container="inline"
          autoOk={true}
          cancelLabel="Закрити"
        >
        </DatePicker>
      </div>
    )
  }
}
