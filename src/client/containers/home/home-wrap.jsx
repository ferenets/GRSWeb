import React from 'react';
import classes from './home-wrap.scss';
import {connect} from 'react-redux';
import {
  getDataSheet,
  getTargetPoints,
  displayNextBranch,
  changeOpenTab,
  startDataLoading,
  getGraphData,
  selectedPointTitle,
  tableRangeDate,
  combinedRange
} from '../../redux/home/home.actions';
import Page from '../../components/page';
import Home from '../../components/home';
import Loading from '../../components/info/loading';
import {hasCookie} from '../../utils/tricks';
import _ from 'lodash';

class HomeWrap extends React.Component {
  constructor(props) {
    super(props);

    this.displayNextBranch = this.displayNextBranch.bind(this);
    this.findTrigger = this.findTrigger.bind(this);
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleChangeTableRange = this.handleChangeTableRange.bind(this);
    this.handleChangeCombinedRange = this.handleChangeCombinedRange.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;

    if (hasCookie('jwt')) {
      dispatch(getDataSheet());
    }
  }

  handleChangeTableRange(tableRange, dataLabel, dateProp) {
    const {dispatch} = this.props;

    dispatch(tableRangeDate(tableRange, dataLabel, dateProp));
  };

  handleChangeCombinedRange(tableRange, dataLabel, dateProp) {
    const {dispatch} = this.props;

    dispatch(combinedRange(tableRange, dataLabel, dateProp));
  };

  handleChangeTab(tabsValue, pointId, pointTitle){
    const {dispatch} = this.props;
    const grs_id = `grs_id=${pointId}`;

    if (pointId) {
      dispatch(startDataLoading());
      dispatch(selectedPointTitle(pointTitle));
      dispatch(getGraphData('grs_id=145'));
    }

    dispatch(changeOpenTab(tabsValue));
  }

  pointsArray(arr, result) {
    arr.map(row => {
      if(row.children != null) {
        this.pointsArray(row.children, result)
      } else {
        result.push(row.label);
      }
    });
  }

  insertPoints(arr) {
    const insertLabel = [];
    this.pointsArray(arr, insertLabel);
    return insertLabel;
  }

  findTrigger(ids, openTrigger) {
    const {home:{defaultTree}} = this.props;
    const length = ids.length;
    let nextTree = _.cloneDeep(defaultTree);
    let selectionLabel = '';
    const ids0 = ids[0];
    const ids1 = ids[1];
    const ids2 = ids[2];
    const ids3 = ids[3];

    switch (length) {
      case 1:
        nextTree[ids0].open = !openTrigger;
        return {
          nextTree,
          selectionLabel: this.insertPoints(nextTree[ids0].children)
        };

      case 2:
        nextTree[ids0].open = true;
        nextTree[ids0].children[ids1].open = !openTrigger;

        if (openTrigger) {
          selectionLabel = this.insertPoints(nextTree[ids0].children);
        } else {
          selectionLabel = this.insertPoints(nextTree[ids0].children[ids1].children);
        }
        return {
          nextTree,
          selectionLabel
        };

      case 3:
        nextTree[ids0].open = true;
        nextTree[ids0].children[ids1].open = true;
        nextTree[ids0].children[ids1].children[ids2].open = !openTrigger;

        if (openTrigger) {
          selectionLabel = this.insertPoints(nextTree[ids0].children[ids1].children);
        } else {
          selectionLabel = this.insertPoints(nextTree[ids0].children[ids1].children[ids2].children);
        }
        return {
          nextTree,
          selectionLabel
        };

      case 4:
        nextTree[ids0].open = true;
        nextTree[ids0].children[ids1].open = true;
        nextTree[ids0].children[ids1].children[ids2].open = true;
        nextTree[ids0].children[ids1].children[ids2].children[ids3].open = true;

        selectionLabel = [nextTree[ids0].children[ids1].children[ids2].children[ids3].label];
        return {
          nextTree,
          selectionLabel
        };

      default:
        return {
          nextTree,
          selectionLabel: this.insertPoints(nextTree[ids0].children)
        };
    }
  }

  displayNextBranch(ids, openTrigger) {
    const {dispatch, home:{dataSheet}} = this.props;
    const changeTree = this.findTrigger(ids, openTrigger);

    dispatch(getTargetPoints(dataSheet, changeTree.selectionLabel));
    dispatch(displayNextBranch(changeTree.nextTree));
  }

  render() {
    const {
      home:{
        loadingPoints,
        tree,
        allPoints,
        targetPoints,
        openTab,
        dataGraph,
        loadingGraph,
        pointTitle,
        tableData,
        combinedData
      }
    } = this.props;

    return (
      <Page>
        <div className={classes.homeWrap}>
          {loadingPoints
            ? <Loading />
            : <Home
                tree={tree}
                displayNextBranch={this.displayNextBranch}
                targetPoints={targetPoints.length > 0 ? targetPoints : allPoints}
                openTab={openTab}
                handleChangeTab={this.handleChangeTab}
                dataGraph={dataGraph}
                loadingGraph={loadingGraph}
                pointTitle={pointTitle}
                handleChangeTableRange={this.handleChangeTableRange}
                tableData={tableData}
                handleChangeCombinedRange={this.handleChangeCombinedRange}
                combinedData={combinedData}
              />
          }
        </div>
      </Page>
    );
  }
}

HomeWrap.PropTypes = {
  dispatch: React.PropTypes.func.isRequired,
  home: React.PropTypes.objectOf(React.PropTypes.shape({
    loadingloading: React.PropTypes.func.isRequired,
    tree: React.PropTypes.array.isRequired,
    defaultTree: React.PropTypes.array.isRequired,
    allPoints: React.PropTypes.array.isRequired,
    targetPoints: React.PropTypes.array.isRequired,
  })).isRequired,
  openTab: React.PropTypes.string.isRequired,
  dataGraph: React.PropTypes.array.isRequired,
  loadingGraph: React.PropTypes.bool.isRequired,
  pointTitle: React.PropTypes.string.isRequired,
  tableData: React.PropTypes.object.isRequired,
  combinedData: React.PropTypes.object.isRequired
};

const selector = (state) => ({home: state.home});

export default connect(selector)(HomeWrap);
