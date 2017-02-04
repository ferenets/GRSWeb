import DataApi from '../../api/data.api';
import _ from 'lodash';
import {createAsyncAction} from '../../../client/libs/redux-helpers';
import {
  allocationDataArray,
  createDisplayTree,
  buildFirstNestingDataTree,
  buildSecondNestingDataTree,
  buildThirdNestingDataTree
} from '../../utils/parse-data.js';

export const START_DATA_HOME_LOADING = 'START_DATA_HOME_LOADING';
export const DATA_HOME_SUCCESS = 'DATA_HOME_SUCCESS';
export const DATA_HOME_FAIL = 'DATA_HOME_FAIL';

const allocationData = (data) => {

  const branchesOfTree = ['UTG', 'UMH', 'LVUMH', 'NAZVA'];
  const [firstTreeBranch, secondTreeBranch, thirdTreeBranch, fourTreeBranch] = branchesOfTree;

  const regions = allocationDataArray(data, firstTreeBranch);
  const area = buildFirstNestingDataTree(regions, secondTreeBranch);
  const locality = buildSecondNestingDataTree(area, thirdTreeBranch);
  const inhabitedLocality = buildThirdNestingDataTree(locality, fourTreeBranch);
  const displayBranch = createDisplayTree(inhabitedLocality);
  const regionNames = _.keys(displayBranch);

  return {
    points: data,
    regions,
    area,
    locality,
    inhabitedLocality,
    displayBranch,
    regionNames,
  };
};

export const startLoading = () => ({type: START_DATA_HOME_LOADING});
export const getDataSheet = createAsyncAction({
  fn: DataApi.getPoints,
  success: (body) => {
    const dataSheet = allocationData(body.data);
    return ({type: DATA_HOME_SUCCESS, dataSheet, tree: body.tree})
  },
  error: (err) => ({type: DATA_HOME_FAIL, err})
});