import geolib from 'geolib';
import _ from 'lodash';
import {
  _dataGraph,
  data_daily_table,
  data_hourly_table,
  data_moment,
  parseDate,
  convertToDate,
  convertToDateTable
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
    tBody: [],
    startDate: '',
    endDate: ''
  };

  let selectedConstant;

  switch (dataLabel) {
    case "data_daily":
      selectedConstant = data_daily_table;
      break;
    case "data_hourly":
      selectedConstant = data_hourly_table;
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
          return convertToDateTable(parseDate( row[col] ), dataLabel)
        } else {
          return row[col];
        }
      })
    ]
  ));
  result["startDate"] = convertToDate(parseDate( tableRange[0][dateProp] ));
  result["endDate"] = convertToDate(parseDate( tableRange[tableRange.length-1][dateProp] ));

  return result;
};