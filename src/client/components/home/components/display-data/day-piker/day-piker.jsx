import classes from './day-piker.scss';
import React from 'react';
// import DatePicker from 'material-ui/DatePicker';
import DatePicker from 'react-toolbox/lib/date_picker';
// import * as materialIcons from 'material-design-icons';
// import theme from './PurpleAppBar.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class DayPiker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultDate: new Date("Wed Mar 25 2017 00:00:00 GMT+0200 (EET)")
    };
    this.handleDisplayData = this.handleDisplayData.bind(this);
  }

  handleDisplayData(date) {
    this.setState({
      defaultDate: date,
    });
  };

  render() {

    const localeExample = {
      months: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
      monthsShort: 'січ._лют._бер._квіт._трав._чер._лип._серп._вер._жов._лист._груд.'.split('_'),
      weekdays: 'понеділок_вівторок_середа_четвер_п\'ятниця_субота_неділя'.split('_'),
      weekdaysShort: 'пн._вт._ср._чт._пт._сб._нд.'.split('_'),
      weekdaysLetter: 'пн_вт_ср_чт_пт_сб_нд'.split('_')
    };

    return (
      <div className={classes.pikerWrap} >
        <DatePicker
          //hintText="Оберіть дату"
          label="Оберіть дату"
          container="inline"
          autoOk={true}
          cancelLabel="Закрити"
          //defaultDate={this.state.defaultDate}
          value={this.state.defaultDate}
          formatDate={
            (d) => new Date(d).toLocaleString(
              "ru",
              {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              }
            )}
          minDate={new Date("Wed Mar 01 2017 02:00:00 GMT+0200 (EET)")}
          maxDate={new Date("Wed Mar 27 2017 02:00:00 GMT+0200 (EET)")}
          onChange={this.handleDisplayData}
          //mode="portrait"
          locale={localeExample}
          //DateTimeFormat={localeExample}
        >
        </DatePicker>
      </div>
    )
  }
}

//
// import DatePicker from 'react-toolbox/lib/date_picker';
// import React from 'react';
//
//
// const datetime = new Date(2015, 10, 16);
// const min_datetime = new Date(new Date(datetime).setDate(8));
// datetime.setHours(17);
// datetime.setMinutes(28);
//
// const localeExample = {
//   months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
//   monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
//   weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
//   weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
//   weekdaysLetter: 'ig_al_ar_az_og_ol_lr'.split('_')
// };
//
// export default class DayPiker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date2: datetime
//     };
//   };
//   handleChange(item, value) {
//     this.setState({
//       [item]: value,
//     });
//   };
//
//   render () {
//     return (
//       <section>
//         <DatePicker
//           label='Locale (Object) - Basque'
//           locale={localeExample}
//           onChange={this.handleChange.bind(this, 'date1')}
//           value={this.state.date1}
//         />
//       </section>
//     );
//   }
// }
