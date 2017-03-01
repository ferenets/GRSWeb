import classes from './day-piker.scss';
import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
require('react-datepicker/dist/react-datepicker-cssmodules.css');

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
    console.log(date);
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

    moment.locale('ua', {
      months: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
      monthsShort: 'січ_лют_бер_квіт_трав_чер_лип_серп_вер_жов_лист_груд'.split('_'),
      weekdays: 'понеділок_вівторок_середа_четвер_п\'ятниця_субота_неділя'.split('_'),
      weekdaysShort: 'пн_вт_ср_чт_пт_сб_нд'.split('_'),
      weekdaysMin : 'пн_вт_ср_чт_пт_сб_нд'.split("_"),
      weekdaysLetter: 'пн_вт_ср_чт_пт_сб_нд'.split('_'),
      longDateFormat : {
        LT : "HH:mm",
        LTS : "HH:mm:ss",
        L : "DD.MM.YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
      },
      week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
      }
    });

    return (
      <div className={classes.pikerWrap} >
        <small>{label}</small>
        <DatePicker
          selected={defaultDate}
          minDate={minDate}
          maxDate={maxDate}
          onChange={this.handleDisplayData}
          container="inline"
          autoOk={true}
          cancelLabel="Закрити"
        >
        </DatePicker>
      </div>
    )
  }
}
