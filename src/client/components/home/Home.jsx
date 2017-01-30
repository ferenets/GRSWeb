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
      heightWrap: 'auto',
      height: 'auto',
      dataTreeIsOpen: true,
    };
    this.openDataTree = this.openDataTree.bind(this);
    this.closeDataTree = this.closeDataTree.bind(this);
  };

  componentDidMount() {
    const headerHeight = parseInt(Constants['headerHeight'].slice(0, -2));
    const footerHeight = parseInt(Constants['footerHeight'].slice(0, -2));
    const padding = parseInt(Constants['paddingDuble'].slice(0, -2));
    const heightWrap = window.innerHeight - headerHeight - footerHeight - padding * 2;
    const height = heightWrap - padding * 5;
    this.setState({
      heightWrap: `${heightWrap}px`,
      height: `${height}px`
    });
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
    const {height, heightWrap, dataTreeIsOpen} = this.state;

    return (
      <div className={classes.homeWrap} >
        <DataTree
          regionsName={_.keys(displayBranchList)}
          displayBranchList={displayBranchList}
          open={dataTreeIsOpen}
          onButtonClick={this.closeDataTree}
          height={height}
          heightDataTree={heightWrap}
        />
        <PointsMap
          fullWidth={!dataTreeIsOpen}
          onButtonClick={this.openDataTree}
          height={height}
          heightPointMap={heightWrap}
        />
      </div>
    );
  }

}