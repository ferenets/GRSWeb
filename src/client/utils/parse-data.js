import geolib from 'geolib';
import _ from 'lodash';
import {
  _dataGraph,
  data_daily,
  data_hourly,
  data_moment,
  parseDate,
  convertToDate
} from './constants.js';

export const selectionPoints = (array) => {
  return array.map(row => ({
      lat: geolib.sexagesimal2decimal(row['SHYROTA']),
      lng: geolib.sexagesimal2decimal(row['DOLHOTA']),
      id: row['GRS_ID'],
      label: row['NAZVA'],
    }));
};

export const selectionTargetPoints = (dataSheet, selectionLabel) => {
  const filteredPoints = [];
  const draft = selectionLabel.map(label => dataSheet.filter(obj => obj['NAZVA'] == label));
  draft.map(arr => filteredPoints.push(arr[0]));

  return selectionPoints(filteredPoints);
};

export const createTableData = (tableRange, dataLabel, dateProp) => {

  const result = {
    tableTitle: '',
    tHead: [],
    tBody: []
  };

  let selectedConstant;

  switch (dataLabel) {
    case "data_daily":
      selectedConstant = data_daily;
      break;
    case "data_hourly":
      selectedConstant = data_hourly;
      break;
    case "data_moment":
      selectedConstant = data_moment;
      break;
  }

  // every object in tableRange has key "_style" - it's some's mistake and I remove it
  let tableData = _.cloneDeep(tableRange);
  tableData.map(row => row["_style"] ? delete row["_style"] : {} );
  //////////////////////////////////////////////////////////////////////////////////

  result["tableTitle"] = _dataGraph[dataLabel];
  result["tHead"] = [...["№пп", "Дати"], ..._.keys(selectedConstant).map(row => selectedConstant[row]) ];
  tableData.map((row, ind) => result["tBody"].push(
    [++ind, ..._.keys(row).map(col => {
        if (col == dateProp) {
          return convertToDate(parseDate( row[col] ))
        } else {
          return row[col];
        }
      })
    ]
  ));

  return result;
};