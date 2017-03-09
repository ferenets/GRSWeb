import DataApi from '../../api/data.api';
import GraphApi from '../../api/data.api';
import { createAsyncAction } from '../../../client/libs/redux-helpers';
import {
  selectionPoints,
  selectionTargetPoints,
  createTableData,
} from '../../utils/parse-data.js';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const START_DATA_HOME_LOADING = 'START_DATA_HOME_LOADING';
export const DATA_HOME_SUCCESS = 'DATA_HOME_SUCCESS';
export const DATA_HOME_FAIL = 'DATA_HOME_FAIL';
export const TAKE_TARGET_POINTS = 'TAKE_TARGET_POINTS';
export const DISPLAY_BRANCH = 'DISPLAY_BRANCH';
export const CHANGE_OPEN_TAB = 'CHANGE_OPEN_TAB';
export const START_GRAPH_DATA_LOADING = 'START_GRAPH_DATA_LOADING';
export const GRAPH_DATA_SUCCESS = 'GRAPH_DATA_SUCCESS';
export const GRAPH_DATA_FAIL = 'GRAPH_DATA_FAIL';
export const SELECTED_POINT_TITLE = 'SELECTED_POINT_TITLE';
export const SELECTED_TABLE_RANGE = 'SELECTED_TABLE_RANGE';
export const SELECTED_COMBINED_RANGE = 'SELECTED_COMBINED_RANGE';

const titleCoordinatePoints = ['SHYROTA', 'DOLHOTA'];
const [firstCoordinate, secondCoordinate] = titleCoordinatePoints;

export const startPointsLoading = () => ({ type: START_DATA_HOME_LOADING });

export const startDataLoading = () => ({ type: START_GRAPH_DATA_LOADING });

export const getDataSheet = createAsyncAction({
  fn: DataApi.getPoints,
  success: (body) => {
    const allPoints = selectionPoints(body.data, firstCoordinate, secondCoordinate);
    return ({ type: DATA_HOME_SUCCESS, dataSheet: body.data, tree: body.tree, allPoints });
  },
  error: err => ({ type: DATA_HOME_FAIL, err }),
});

export const displayNextBranch = changeTree => ({ type: DISPLAY_BRANCH, changeTree });

export const getTargetPoints = (dataSheet, selectionLabel) => {
  const selectionPoints = selectionTargetPoints(dataSheet, selectionLabel);
  return { type: TAKE_TARGET_POINTS, selectionPoints };
};

export const changeOpenTab = tabsValue => ({ type: CHANGE_OPEN_TAB, tabsValue });

export const getGraphData = createAsyncAction({
  fn: DataApi.endpoint,
  success: body =>
    // const dataGraphPoint = dataRestructuring(body);
     ({ type: GRAPH_DATA_SUCCESS, body }),
  error: err => ({ type: GRAPH_DATA_FAIL, err }),
});

export const selectedPointTitle = pointTitle => ({ type: SELECTED_POINT_TITLE, pointTitle });

export const tableRangeDate = (tableRange, dataLabel, dateProp) => {
  const tableData = createTableData(tableRange, dataLabel, dateProp);
  return { type: SELECTED_TABLE_RANGE, tableData };
};

export const combinedRange = (tableRange, dataLabel, dateProp) => {
  const combinedData = createTableData(tableRange, dataLabel, dateProp);
  return { type: SELECTED_COMBINED_RANGE, combinedData };
};
