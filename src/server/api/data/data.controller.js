'use strict';

/* THIS IS A VERY RARE CONTROLLER IMPLEMENTATION THAT USES A STATIC GRS_WEB DATA */
/* THE ALGORITHMS IN THIS MODULE ARE VERY SLOW AND JUST IMITATING A COMMUNICATION WITH DB */
/* IN THE FUTURE VERSIONS WE'LL PROVIDE AN OPTIMIZED INTERFACE TO COMMUNICATE WITH ORACLE DB NODE.JS INTERFACE (task for Roman or Serhii) */

/* THE DATA IS PROVIDED ONLY FOR GRS_ID "145" */

// const Promise = require('bluebird');
// const AppError = require('../../libs/app-error');
// const DataFilter = require('./data.filter.utils');
const DataPrepare = require('./data.prepare.utils');
// const config = require('../../config');
const _ = require('lodash');

const SELECTED_COLUMNS = ['UTG', 'UMH', 'LVUMH', 'NAZVA']; // set selected columns here
const MAX_DEPTH = SELECTED_COLUMNS.length - 1;

const createNode = (uniqNodes, col, records, depth) => {
  return uniqNodes[col].map(node => {
    const filteredRecords = records.filter(rec => rec[col] === node);
    if (filteredRecords.length === 0) return null;
    const nextDepth = depth + 1;

    return {
      label: node,
      open: false,
      children: depth === MAX_DEPTH ? null : createNode(uniqNodes, SELECTED_COLUMNS[nextDepth], filteredRecords, nextDepth)
    };
  }).filter(r => r !== null);
};

const createTreeRecursion = (records) => {
  const uniqueNodes = _.zipObject(SELECTED_COLUMNS, SELECTED_COLUMNS.map(col => _.uniq(_.map(records, col))));
  const depth = 0;

  return createNode(uniqueNodes, SELECTED_COLUMNS[depth], records, depth);
};

const DataController = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  getPoints: (req, res, next) => {
    const Points = require('../../static-data/points');

    if (req.user.role === null) { // No user applied
      return res.send({ data: [], tree: [] });
    }
    
    res.send({
      data: Points,
      tree: createTreeRecursion(Points)
    });
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  getIndicators: (req, res, next) => {
    const IndicatorsDaily = require('../../static-data/indicators-daily');
    const IndicatorsHourly = require('../../static-data/indicators-hourly');
    const IndicatorsMoment = require('../../static-data/indicators-moment');
    const {grs_id} = req.query;

    if (req.user.role === null) { // No user applied
      return res.send({
        grs_id,
        data_daily: [],
        data_hourly: [],
        data_moment: []
      });
    }

    res.send({
      grs_id,
      data_daily: DataPrepare.indicatorsGraphData('daily', IndicatorsDaily.filter(row => row['GRS_ID'] === grs_id)),
      data_hourly: DataPrepare.indicatorsGraphData('hourly', IndicatorsHourly.filter(row => row['GRS_ID'] === grs_id)),
      data_moment: DataPrepare.indicatorsGraphData('moment', IndicatorsMoment.filter(row => row['GRS_ID'] === grs_id))
    });
  },
  
};

module.exports = DataController;
