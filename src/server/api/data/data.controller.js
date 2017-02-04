'use strict';

// const Promise = require('bluebird');
// const AppError = require('../../libs/app-error');
// const config = require('../../config');
const GRS_INFO = require('../../static-data/grs-info');
const _ = require('lodash');

const SELECTED_COLUMNS = ['UTG', 'UMH', 'LVUMH', 'NAZVA']; // set selected columns here
const MAX_DEPTH = SELECTED_COLUMNS.length - 1;

// const createTreeHardcode = (records, columns) => {
//   const uniqueNodes = _.zipObject(columns, columns.map(col => _.uniq(_.map(records, col))));
//   const rootCol = columns[0];
//   const roots = uniqueNodes[rootCol];
//
//   return roots.map((node, i) => {
//     const col = columns[0];
//     const records0 = records.filter(record => record[col] === node);
//     if (records0.length === 0) return null;
//     // console.log(records0.length);
//
//     return {
//       label: node,
//       open: false,
//       children: uniqueNodes[columns[1]].map((node, j) => {
//         const col = columns[1];
//         const records1 = records0.filter(record => record[col] === node);
//         if (records1.length === 0) return null;
//         // console.log(records1.length);
//
//         return {
//           label: node,
//           open: false,
//           children: uniqueNodes[columns[2]].map((node, k) => {
//             const col = columns[2];
//             const records2 = records1.filter(record => record[col] === node);
//             if (records2.length === 0) return null;
//             // console.log(records2.length);
//
//             return {
//               label: node,
//               open: false,
//               children: uniqueNodes[columns[3]].map((node, l) => {
//                 const col = columns[3];
//                 const records3 = records2.filter(record => record[col] === node);
//                 if (records3.length === 0) return null;
//                 // console.log(records3.length);
//
//                 return {
//                   label: node,
//                   open: false,
//                   children: null
//                 };
//               }).filter(node => node !== null)
//             };
//           }).filter(node => node !== null)
//         };
//       }).filter(node => node !== null)
//     };
//   }).filter(node => node !== null);
// };

const createNode = (uniqNodes, col, records, depth) => {
  return uniqNodes[col].map((node => {
    const filteredRecords = records.filter(rec => rec[col] === node);
    if (filteredRecords.length === 0) return null;
    const nextDepth = depth + 1;

    return {
      label: node,
      open: false,
      children: depth === MAX_DEPTH ? null : createNode(uniqNodes, SELECTED_COLUMNS[nextDepth], filteredRecords, nextDepth)
    }
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
