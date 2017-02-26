import classes from './home.scss';
import React from 'react';
import DataTree from './components/data-tree';
import DisplayData from './components/display-data';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dataTreeIsOpen: true };

    this.openDataTree = this.openDataTree.bind(this);
    this.closeDataTree = this.closeDataTree.bind(this);
  };

  openDataTree() {
    this.setState({ dataTreeIsOpen: true });
  };

  closeDataTree() {
    this.setState({ dataTreeIsOpen: false });
  };

  render() {
    const {
      targetPoints,
      tree,
      displayNextBranch,
      openTab,
      handleChangeTab,
      dataGraph,
      loadingGraph,
      pointTitle,
      handleChengeTableRange,
      tableData
    } = this.props;

    const {dataTreeIsOpen} = this.state;

    return (
      <div className={classes.home}>
        <DataTree
          open={dataTreeIsOpen}
          onButtonClick={this.closeDataTree}
          tree={tree}
          displayNextBranch={displayNextBranch}
          targetPoints={targetPoints}
          handleChangeTab={handleChangeTab}
        />
        <DisplayData
          fullWidth={!dataTreeIsOpen}
          onButtonClick={this.openDataTree}
          targetPoints={targetPoints}
          openTab={openTab}
          handleChangeTab={handleChangeTab}
          dataGraph={dataGraph}
          loadingGraph={loadingGraph}
          pointTitle={pointTitle}
          handleChengeTableRange={handleChengeTableRange}
          tableData={tableData}
        />
      </div>
    );
  }
}

Home.PropTypes = {
  targetPoints: React.PropTypes.array.isRequired,
  tree: React.PropTypes.array.isRequired,
  displayNextBranch: React.PropTypes.func.isRequired,
  openTab: React.PropTypes.string.isRequired,
  handleChangeTab: React.PropTypes.func.isRequired,
  dataGraph: React.PropTypes.array.isRequired,
  loadingGraph: React.PropTypes.bool.isRequired,
  pointTitle: React.PropTypes.string.isRequired,
  handleChengeTableRange: React.PropTypes.func.isRequired,
  tableData: React.PropTypes.object.isRequired
};
