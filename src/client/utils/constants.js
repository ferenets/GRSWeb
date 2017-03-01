import * as d3Shape from 'react-d3-shape';
import moment from 'moment';
import dateFormat from 'dateformat';

export const _dataGraph = {
  data_daily: "Добові",
  data_hourly: "Годинні",
  data_moment: "Миттєві"
};

export const data_daily = {
  TEMPERATURE: "Температура, °C",
  PRESSURE: "Тиск, кгс/см2",
  VOL_PY: "Об’єм при Ру, м3",
  VOL_STD: "Об’єм, м3"
};

export const data_hourly = {
  TEMPERATURE: "Температура, °C",
  PRESSURE: "Тиск, кгс/см2",
  VOL_PY: "Об’єм при Ру, м3",
  VOL_STD: "Об’єм, м3"
};

export const data_moment = {
  TEMPERATURE: "Температура, °C",
  P_STAT: "Тиск статичний, кгс/см2",
  Q_CURR: "Витрата поточна, м3/год",
  Q_GENERAL: "Об’єм загальний, м3",
  Q_START_DAY: "Об’єм з початку доби, м3",
  Q_LAST_DAY: "Об’єм за минулу добу, м3",
};

export const _dataGraphCombine = {
  data_daily: "Добові",
  data_hourly: "Годинні",
};

export const data_daily_table = {
  VOL_STD: "Об’єм, м3",
  VOL_PY: "Об’єм при Ру, м3",
  PRESSURE: "Тиск, кгс/см2",
  TEMPERATURE: "Температура, °C"
};

export const data_hourly_table = {
  VOL_STD: "Об’єм, м3",
  VOL_PY: "Об’єм при Ру, м3",
  PRESSURE: "Тиск, кгс/см2",
  TEMPERATURE: "Температура, °C"
};

export const parseDate = d3.time.format("%Y%m%d%H%M").parse;

export const convertDate = (d) => dateFormat(moment(d, "ddd mmm dd yyyy HH:MM:ss Z").toDate(), "yyyymmddHHMM");

export const convertToDate = (d) => dateFormat(moment(d, "ddd mmm dd yyyy HH:MM:ss Z").toDate(), "dd.mm.yy HH:MM");

export const binarySearch = (val, arr, prop) => {
  let i = 0, j = arr.length, k;

  while (i < j) {
    k = Math.floor((i+j)/2);
    if (val <= arr[k][prop]) j = k;
    else i = k+1;
  }

  return i;
};

export const getDate = (data, dataLabel ,index) => {
  //return new Date( parseDate(data[index][dataLabel]) );
  return moment( parseDate(data[index][dataLabel]))
};