import {
  LOGOUT_SUCCESS,
  START_DATA_HOME_LOADING,
  DATA_HOME_SUCCESS,
  DATA_HOME_FAIL,
  TAKE_TARGET_POINTS,
  DISPLAY_BRANCH
} from './home.actions';
import _ from 'lodash';

const initalState = {
  dataSheet: [],
  tree: [],
  allPoints: [],
  targetPoints: [],
  defaultTree: [],
  loading: true,
  err: null
};

export default function (state = initalState, action) {
  switch (action.type) {

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, initalState);

    case START_DATA_HOME_LOADING:
      return Object.assign({}, state, { loading: true });

    case DATA_HOME_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        err: null,
        dataSheet: action.dataSheet,
        tree: action.tree,
        defaultTree: _.cloneDeep(action.tree),
        allPoints: action.allPoints
      });

    case DATA_HOME_FAIL:
      return Object.assign({}, state, {
        loading: false,
        err: action.err
      });

    case DISPLAY_BRANCH:
      return Object.assign({}, state, {
        tree: action.changeTree
      });

    case TAKE_TARGET_POINTS:
      return Object.assign({}, state, {
        targetPoints: action.selectionPoints
      });

    default:
      return state;
  }
}