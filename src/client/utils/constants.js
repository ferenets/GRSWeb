import * as d3Shape from 'react-d3-shape';

export const _dataGraph = {
  data_daily: "Денні дані",
  data_hourly: "Годинні дані",
  data_moment: "Миттєві дані"
};

export const data_daily = {
  TEMPERATURE: "Температура",
  PRESSURE: "Тиск",
  VOL_PY: "VOL_PY",
  VOL_STD: "VOL_STD"
};

export const data_hourly = {
  TEMPERATURE: "Температура",
  PRESSURE: "Тиск",
  VOL_PY: "VOL_PY",
  VOL_STD: "VOL_STD"
};

export const data_moment = {
  TEMPERATURE: "Температура",
  P_STAT: "Статичний тиск",
  Q_CURR: "Q_CURR",
  Q_GENERAL: "Q_GENERAL",
  Q_LAST_DAY: "Q_LAST_DAY",
};

export const parseDate = d3.time.format("%Y%m%d%H%M").parse;
