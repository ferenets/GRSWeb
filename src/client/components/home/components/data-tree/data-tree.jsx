import classes from './data-tree.scss';
import React from 'react';
import DataTreeList from './data-tree-list.jsx';
import Button from '../buttons/button.jsx';

export default class DataTree extends React.Component {
  constructor(props) {
    super(props);
    this.displayTree = this.displayTree.bind(this);
  }

  displayTree(arr, depth) {
    const {
      displayNextBranch,
      targetPoints,
      handleChangeTab
    } = this.props;

    return arr.map((row, ind) =>
      <DataTreeList
        key={ind}
        index={[...depth, ind]}
        title={row.label}
        displayTree={this.displayTree}
        children={row.children}
        open={row.open}
        displayNextBranch={displayNextBranch}
        targetPoints={targetPoints}
        handleChangeTab={handleChangeTab}
      />
    )
  }

  render () {
    const {
      onButtonClick,
      open,
      tree
    } = this.props;

    const depth = [];

    return (
      <div
        className={classes.wrapListBranch}
        style={open ? {} : {width: 0, padding: 0, margin: 0}}
      >
        <div className={classes.buttonWrap}>
          <Button
            open={true}
            onClick={onButtonClick}
          />
        </div>
        <div className={classes.listWrap}>
          {this.displayTree(tree, depth)}
        </div>
      </div>
    );
  }
}

DataTree.PropTypes = {
  tree: React.PropTypes.array.isRequired,
  onButtonClick: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired,
  displayNextBranch: React.PropTypes.func.isRequired,
  targetPoints: React.PropTypes.string.isRequired,
  handleChangeTab: React.PropTypes.func.isRequired,
};
