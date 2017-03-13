

// const AppError = require('../../libs/app-error');
const Promise = require('bluebird');
// const _ = require('lodash');

const DataFilter = {

  /**
   *
   * @param points
   * @param rights
   */
  points: (points, rights) => new Promise((resolve, reject) => {
    resolve(points);
  }),

  // /**
  //  *
  //  * @param points
  //  * @param rights
  //  */
  // indicators: (points, rights) => new Promise((resolve, reject) => {
  //   resolve(points);
  // }),

};

module.exports = DataFilter;
