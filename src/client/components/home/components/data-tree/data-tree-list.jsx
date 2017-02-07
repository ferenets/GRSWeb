import classes from './data-tree.scss';
import React from 'react';

export default class DataTreeList extends React.Component {
  constructor(props) {
    super(props);

    this.displayNextBranch = this.displayNextBranch.bind(this);
    this.openPointGraph = this.openPointGraph.bind(this);
  }

  displayNextBranch() {
    const {
      displayNextBranch,
      index,
      open,
      handleChangeTab
    } = this.props;

    handleChangeTab("map");
    displayNextBranch(index, open);
  }

  openPointGraph() {
    const {
      index,
      targetPoints,
      handleChangeTab
    } = this.props;

    if (index.length == 4) {
      handleChangeTab("graphA", targetPoints[0].id);
    }
  }


  render () {
    const {
      title,
      displayTree,
      children,
      open,
      index
    } = this.props;

    return (
      <div className={classes.listTitle}>
        {open && children != null
          ? <span
            className={classes.title}
            onClick={this.displayNextBranch}
            onDoubleClick={this.openPointGraph}
          >
            <span className={classes.openLabel}>-</span>
            {title}
          </span>
          : <span
            className={classes.title}
            onClick={this.displayNextBranch}
            onDoubleClick={this.openPointGraph}
          >
            <span className={classes.openLabel}>+</span>
            {title}
          </span>
        }
      <div>
        {open && children != null ? displayTree(children, index) : null}
      </div>
      </div>
    );
  }
}

DataTreeList.PropTypes = {
  title: React.PropTypes.string.isRequired,
  displayTree: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired,
  index: React.PropTypes.array.isRequired,
};
