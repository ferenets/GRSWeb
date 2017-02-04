'use strict';

// const Promise = require('bluebird');
// const AppError = require('../../libs/app-error');
// const config = require('../../config');
const GRS_INFO = require('../../static-data/grs-info');
const _ = require('lodash');

const SELECTED_COLUMNS = ['UTG', 'UMH', 'LVUMH', 'NAZVA']; // set selected columns here
const MAX_DEPTH = SELECTED_COLUMNS.length - 1;

const createNode = (uniqNodes, col, records, depth) => {
  return uniqNodes[col].map((node => {
    const filteredRecords = records.filter(rec => rec[col] === node);
    if (filteredRecords.length === 0) return null;
    const nextDepth = depth + 1;

    return {
      label: node,
      open: false,
      children: depth === MAX_DEPTH ? null : createNode(uniqNodes, SELECTED_COLUMNS[nextDepth], filteredRecords, nextDepth)
    };
  })).filter(r => r !== null);
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
    res.send({
      data: GRS_INFO,
      tree: createTreeRecursion(GRS_INFO)
    });
  },
  
};

module.exports = DataController;
