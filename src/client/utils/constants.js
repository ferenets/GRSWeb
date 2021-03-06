import * as d3Shape from 'react-d3-shape';
import moment from 'moment';
import dateFormat from 'dateformat';

export const _dataGraph = {
  data_daily: 'Добові',
  data_hourly: 'Годинні',
  data_moment: 'Миттєві',
};

export const data_daily = {
  TEMPERATURE: 'Температура, °C',
  PRESSURE: 'Тиск, кгс/см²',
  VOL_PY: 'Об’єм при Ру, м³',
  VOL_STD: 'Об’єм, м³',
};

export const data_hourly = {
  TEMPERATURE: 'Температура, °C',
  PRESSURE: 'Тиск, кгс/см²',
  VOL_PY: 'Об’єм при Ру, м³',
  VOL_STD: 'Об’єм, м³',
};

export const data_moment = {
  TEMPERATURE: 'Температура, °C',
  P_STAT: 'Тиск статичний, кгс/см²',
  Q_CURR: 'Витрата поточна, м³/год',
  Q_GENERAL: 'Об’єм загальний, м³',
  Q_START_DAY: 'Об’єм з початку доби, м³',
  Q_LAST_DAY: 'Об’єм за минулу добу, м³',
};

export const _dataGraphCombine = {
  data_daily: 'Добові',
  data_hourly: 'Годинні',
};

export const data_daily_table = {
  VOL_STD: 'Об’єм, м³',
  VOL_PY: 'Об’єм при Ру, м³',
  PRESSURE: 'Тиск, кгс/см²',
  TEMPERATURE: 'Температура, °C',
};

export const data_hourly_table = {
  VOL_STD: 'Об’єм, м³',
  VOL_PY: 'Об’єм при Ру, м³',
  PRESSURE: 'Тиск, кгс/см²',
  TEMPERATURE: 'Температура, °C',
};

export const parseDate = d3.time.format('%Y%m%d%H%M').parse;

export const convertDate = d => dateFormat(moment(d, 'ddd mmm dd yyyy HH:MM:ss Z').toDate(), 'yyyymmddHHMM');

export const convertToDate = d => dateFormat(moment(d, 'ddd mmm dd yyyy HH:MM:ss Z').toDate(), 'dd.mm.yy HH:MM');

export const convertToDateTable = (d, dataLabel) => {
  if (dataLabel == 'data_daily') {
    return dateFormat(moment(d, 'ddd mmm dd yyyy HH:MM:ss Z').toDate(), 'dd.mm.yy');
  }
  return dateFormat(moment(d, 'ddd mmm dd yyyy HH:MM:ss Z').toDate(), 'dd.mm.yy HH:MM');
};

export const dateCompare = (firstDate, secondDate) => moment(firstDate).isSameOrAfter(secondDate);

export const binarySearch = (val, arr, prop) => {
  let i = 0,
    j = arr.length,
    k;

  while (i < j) {
    k = Math.floor((i + j) / 2);
    if (val <= arr[k][prop]) j = k;
    else i = k + 1;
  }

  return i;
};

export const getDate = (data, dateLabel, index) =>
  // return new Date( parseDate(data[index][dataLabel]) );
   moment(parseDate(data[index][dateLabel]));

export const getFirstDayMonth = (date) => {
  let dd,
    mm;
  dd = moment(date).date();
  mm = moment(date).month();
  return moment(date).month(mm).date(1);
};

export const getStartDate = (dataType, startDate) => {
  let resultDate,
    mm,
    dd;

  switch (dataType) {
    case 'data_daily':
      dd = moment(startDate).date();
      mm = moment(startDate).month();
      resultDate = moment(startDate).month(--mm).date(1);
      break;
    case 'data_hourly':
      dd = moment(startDate).date();
      mm = moment(startDate).month();
      resultDate = moment(startDate).month(mm).date(--dd);
      break;
  }

  return resultDate;
};

export const getEndDate = (dataType, startDate) => {
  let resultDate,
    mm,
    dd;

  switch (dataType) {
    case 'data_daily':
      dd = moment(startDate).date();
      mm = moment(startDate).month();
      resultDate = moment(startDate).endOf('month');

      break;
    case 'data_hourly':
      dd = moment(startDate).date();
      mm = moment(startDate).month();
      return resultDate = moment(startDate).month(mm).date(++dd);
      break;
  }

  return resultDate;
};

export const getNextDate = (dataType, startDate) => {
  let resultDate,
    mm,
    dd;

  switch (dataType) {
    case 'data_daily':
      dd = moment(startDate).date();
      mm = moment(startDate).month();
      resultDate = moment(startDate).month(++mm).date(1);
      break;
    case 'data_hourly':
      dd = moment(startDate).date();
      mm = moment(startDate).month();
      return resultDate = moment(startDate).month(mm).date(++dd);
      break;
  }
  console.log(resultDate);
  return resultDate;
};
