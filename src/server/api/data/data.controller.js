'use strict';

// const Promise = require('bluebird');
// const AppError = require('../../libs/app-error');
// const config = require('../../config');
const GRS_INFO = require('../../static-data/grs-info');
// const _ = require('lodash');

const DataController = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  getPoints: (req, res, next) => {
    res.send({data: GRS_INFO});
  },
  
};

module.exports = DataController;
