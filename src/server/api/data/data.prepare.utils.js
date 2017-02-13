'use strict';

const AppError = require('../../libs/app-error');
// const Promise = require('bluebird');
const moment = require('moment');
const _ = require('lodash');

const SELECT_INDICATORS = {
  daily: {
    x: {
      label: 'DAY',
      dateFormat: 'DD.MM.YY'
    },
    y: ['VOL_STD', 'VOL_PY', 'PRESSURE', 'TEMPERATURE']
  },
  hourly: {
    x: {
      label: 'DAY_HOUR',
      dateFormat: 'DD.MM.YY HH:mm'
    },
    y: ['VOL_STD', 'VOL_PY', 'PRESSURE', 'TEMPERATURE']
  },
  moment: {
    x: {
      label: 'DT_DATA',
      dateFormat: 'DD.MM.YY HH:mm'
    },
    y: ['P_STAT', 'TEMPERATURE', 'Q_CURR', 'Q_START_DAY', 'Q_LAST_DAY', 'Q_GENERAL']
  }
};

const DataPrepare = {

  /**
   *
   * @param xAxis
   * @param records
   */
  indicatorsGraphData: (xAxis, records) => {
    let result = {};
    let xLabel = '';
    let xDateFormat = '';
    let yValues = [];

    switch(xAxis) {
      case 'daily':
      case 'hourly':
      case 'moment':
        xLabel = SELECT_INDICATORS[xAxis].x.label;
        xDateFormat = SELECT_INDICATORS[xAxis].x.dateFormat;
        yValues = SELECT_INDICATORS[xAxis].y;
        break;
      default:
        throw new AppError.badRequest('Invalid indicators type');
        break;
    }

    yValues.forEach(yVal => {
      result[yVal] = {
        label: yVal,
        values: _.sortBy(_.map(records, record => ({
          x: moment(record[xLabel], xDateFormat).toDate(),
          y: parseFloat(record[yVal])
        })), ['x'])
      };
    });

    return result;
  },

};

module.exports = DataPrepare;
