import classes from './home.scss';
import React from 'react';
import DataTree from './components/data-tree';
import PointsMap from './components/map';

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
    const {displayBranch, regionNames} = this.props;
    const {dataTreeIsOpen} = this.state;

    return (
      <div className={classes.home}>
        <DataTree
          regionNames={regionNames}
          displayBranch={displayBranch}
          open={dataTreeIsOpen}
          onButtonClick={this.closeDataTree}
        />
        <PointsMap
          fullWidth={!dataTreeIsOpen}
          onButtonClick={this.openDataTree}
        />
      </div>
    );
  }
};

Home.PropTypes = {
  regionsNames: React.PropTypes.array.isRequired,
  displayBranch: React.PropTypes.object.isRequired,
};