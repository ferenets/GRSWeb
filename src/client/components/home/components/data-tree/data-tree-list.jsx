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

  openPointGraph(pointTitle) {
    const {
      index,
      targetPoints,
      handleChangeTab
    } = this.props;

    if (index.length == 4) {
      handleChangeTab("graphA", targetPoints[0].id, pointTitle);
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

    const styles = {
      checkedPoint: {
        color: '#fff',
        backgroundColor: '#0097A7'
      },
      uncheckedPoint: {
        backgroundColor: 'transparent'
      }
    };

    return (
      <div className={classes.listTitle}>
        {open
          ? <span
            className={classes.title}
            onClick={this.displayNextBranch}
            onDoubleClick={() => this.openPointGraph(title)}
          >
            <span className={classes.openLabel}>
              {children == null
                ? <img src="../../../../images/marker.svg" />
                : <img src="../../../../images/ic_add_white_24px.svg" />
              }
            </span>
            <span
              className={classes.titleLabel}
              style={children == null
                ? styles.checkedPoint
                : styles.uncheckedPoint}
            >{title}</span>
          </span>
          : <span
            className={classes.title}
            onClick={this.displayNextBranch}
            onDoubleClick={this.openPointGraph}
          >
            <span className={classes.openLabel}>
              {children == null
                ? <img src="../../../../images/marker.svg" />
                : <img src="../../../../images/ic_remove_white_24px.svg" />
              }
            </span>
            <span className={classes.titleLabel} >{title}</span>
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
  displayNextBranch: React.PropTypes.func.isRequired,
  handleChangeTab: React.PropTypes.func.isRequired,
  targetPoints: React.PropTypes.string.isRequired,
  children: React.PropTypes.bool.isRequired,
};
