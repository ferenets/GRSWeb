import DataApi from '../../api/data.api';
import {createAsyncAction} from '../../../client/libs/redux-helpers';
import {
  selectionPoints,
  selectionTargetPoints
} from '../../utils/parse-data.js';

export const START_DATA_HOME_LOADING = 'START_DATA_HOME_LOADING';
export const DATA_HOME_SUCCESS = 'DATA_HOME_SUCCESS';
export const DATA_HOME_FAIL = 'DATA_HOME_FAIL';
export const TAKE_TARGET_POINTS = 'TAKE_TARGET_POINTS';
export const DISPLAY_BRANCH = 'DISPLAY_BRANCH';

const titleCoordinatePoints = ['SHYROTA', 'DOLHOTA'];
const [firstCoordinate, secondCoordinate] = titleCoordinatePoints;

export const startLoading = () => ({type: START_DATA_HOME_LOADING});

export const getDataSheet = createAsyncAction({
  fn: DataApi.getPoints,
  success: (body) => {
    const allPoints = selectionPoints(body.data, firstCoordinate, secondCoordinate);
    return ({type: DATA_HOME_SUCCESS, dataSheet: body.data, tree: body.tree, allPoints})
  },
  error: (err) => ({type: DATA_HOME_FAIL, err})
});

export const displayNextBranch = (changeTree) => ({type: DISPLAY_BRANCH, changeTree});

export const getTargetPoints = (dataSheet, selectionLabel) => {
  const selectionPoints = selectionTargetPoints(dataSheet, selectionLabel);
  return {type: TAKE_TARGET_POINTS, selectionPoints};
};