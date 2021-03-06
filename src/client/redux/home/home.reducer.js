import {
  LOGOUT_SUCCESS,
  START_DATA_HOME_LOADING,
  DATA_HOME_SUCCESS,
  DATA_HOME_FAIL,
  TAKE_TARGET_POINTS,
  DISPLAY_BRANCH,
  CHANGE_OPEN_TAB,
  START_GRAPH_DATA_LOADING,
  GRAPH_DATA_SUCCESS,
  GRAPH_DATA_FAIL,
  SELECTED_POINT_TITLE,
  SELECTED_TABLE_RANGE,
  SELECTED_COMBINED_RANGE,
} from './home.actions';
import _ from 'lodash';

const initalState = {
  dataSheet: [],
  tree: [],
  allPoints: [],
  targetPoints: [],
  defaultTree: [],
  loadingPoints: true,
  loadingGraph: true,
  dataGraph: {},
  openTab: 'map',
  pointTitle: 'Будь-ласка, оберіть дані для відображення',
  tableData: {
    tableTitle: 'Будь-ласка, оберіть дані для відображення',
    tHead: null,
    tBody: null,
    startDate: '',
    endDate: '',
  },
  combinedData: {
    tableTitle: 'Будь-ласка, оберіть дані для відображення',
    tHead: null,
    tBody: null,
    startDate: '',
    endDate: '',
  },
  err: null,
};

export default function (state = initalState, action) {
  switch (action.type) {

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, initalState);

    case START_DATA_HOME_LOADING:
      return Object.assign({}, state, { loadingPoints: true });

    case DATA_HOME_SUCCESS:
      return Object.assign({}, state, {
        loadingPoints: false,
        err: null,
        dataSheet: action.dataSheet,
        tree: action.tree,
        defaultTree: _.cloneDeep(action.tree),
        allPoints: action.allPoints,
      });

    case DATA_HOME_FAIL:
      return Object.assign({}, state, {
        loadingPoints: false,
        err: action.err,
      });

    case DISPLAY_BRANCH:
      return Object.assign({}, state, {
        tree: action.changeTree,
      });

    case TAKE_TARGET_POINTS:
      return Object.assign({}, state, {
        targetPoints: action.selectionPoints,
      });

    case CHANGE_OPEN_TAB:
      return Object.assign({}, state, {
        openTab: action.tabsValue,
      });

    case START_GRAPH_DATA_LOADING:
      return Object.assign({}, state, { loadingGraph: true });

    case GRAPH_DATA_SUCCESS:
      return Object.assign({}, state, {
        loadingGraph: false,
        err: null,
        dataGraph: action.body,
      });

    case GRAPH_DATA_FAIL:
      return Object.assign({}, state, {
        loadingGraph: false,
        err: action.err,
      });

    case SELECTED_POINT_TITLE:
      return Object.assign({}, state, {
        pointTitle: action.pointTitle,
      });

    case SELECTED_TABLE_RANGE:
      return Object.assign({}, state, {
        tableData: {
          tableTitle: action.tableData.tableTitle,
          tHead: action.tableData.tHead,
          tBody: action.tableData.tBody,
          startDate: action.tableData.startDate,
          endDate: action.tableData.endDate,
        },
      });

    case SELECTED_COMBINED_RANGE:
      return Object.assign({}, state, {
        combinedData: {
          tableTitle: action.combinedData.tableTitle,
          tHead: action.combinedData.tHead,
          tBody: action.combinedData.tBody,
          startDate: action.combinedData.startDate,
          endDate: action.combinedData.endDate,
        },
      });

    default:
      return state;
  }
}
