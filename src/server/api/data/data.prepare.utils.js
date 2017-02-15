'use strict';

const AppError = require('../../libs/app-error');
// const Promise = require('bluebird');
const moment = require('moment');
const _ = require('lodash');

const SELECT_INDICATORS = {
  daily: {
    x: {
      label: 'DAY',
      convertFunction: (val) => moment(val, "DD.MM.YY").toDate().getTime().toString(),
    },
    y: [
      {
        label: 'VOL_STD',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'VOL_PY',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'PRESSURE',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'TEMPERATURE',
        convertFunction: (val) => parseFloat(val),
      }
    ]
  },
  hourly: {
    x: {
      label: 'DAY_HOUR',
      convertFunction: (val) => moment(val, "DD.MM.YY HH:mm").toDate().getTime().toString(),
    },
    y: [
      {
        label: 'VOL_STD',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'VOL_PY',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'PRESSURE',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'TEMPERATURE',
        convertFunction: (val) => parseFloat(val),
      }
    ]
  },
  moment: {
    x: {
      label: 'DT_DATA',
      convertFunction: (val) => moment(val, "DD.MM.YY HH:mm").toDate().getTime().toString(),
    },
    y: [
      {
        label: 'P_STAT',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'TEMPERATURE',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'Q_CURR',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'Q_START_DAY',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'Q_LAST_DAY',
        convertFunction: (val) => parseFloat(val),
      },
      {
        label: 'Q_GENERAL',
        convertFunction: (val) => parseFloat(val),
      }
    ]
  }
};

const DataPrepare = {

  /**
   *
   * @param xAxis
   * @param records
   */
  indicatorsGraphData: (xAxis, records) => {
    let x = {};
    let ys = [];

    switch(xAxis) {
      case 'daily':
      case 'hourly':
      case 'moment':
        x = SELECT_INDICATORS[xAxis].x;
        ys = SELECT_INDICATORS[xAxis].y;
        break;
      default:
        throw new AppError.badRequest('Invalid indicators type');
        break;
    }
    const labels = [x.label, ..._.map(ys, y => y.label)];

    return _.sortBy(records.map(row => _.zipObject(
      labels,
      [
        x.convertFunction(row[x.label]),
        ..._.map(ys, y => y.convertFunction(row[y.label]))
      ]
    )), x.label);
  },

};

module.exports = DataPrepare;
