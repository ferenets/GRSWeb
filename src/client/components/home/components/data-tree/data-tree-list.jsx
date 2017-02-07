import classes from './data-tree.scss';
import React from 'react';

export default class DataTreeList extends React.Component {
  constructor(props) {
    super(props);

    this.displayNextBranch = this.displayNextBranch.bind(this);
  }

  displayNextBranch() {
    const {
      displayNextBranch,
      index,
      open
    } = this.props;

    displayNextBranch(index, open)
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
        <span onClick={this.displayNextBranch}>
          {title}
        </span>
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