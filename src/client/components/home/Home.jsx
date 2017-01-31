import classes from './Home.scss';
import React from 'react';
import _ from 'lodash';
import DataTree from './components/dataTree';
import PointsMap from './components/map';
import Constants from '../../containers/root/constants.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTreeIsOpen: true,
    };
    this.openDataTree = this.openDataTree.bind(this);
    this.closeDataTree = this.closeDataTree.bind(this);
  };

  openDataTree() {
    this.setState({
      dataTreeIsOpen: true
    });
  };

  closeDataTree() {
    this.setState({
      dataTreeIsOpen: false
    });
  };

  render() {
    const {displayBranchList} = this.props;
    const {
        dataTreeIsOpen
    } = this.state;

    return (
      <div className={classes.home} >
        <DataTree
          regionsName={_.keys(displayBranchList)}
          displayBranchList={displayBranchList}
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

}