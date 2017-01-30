import classes from './DataTree.scss';
import React from 'react';
import DataTreeList from './DataTreeList.jsx';
import Button from '../buttons/Button.jsx';

export default class DataTree extends React.Component {
  constructor(props) {
    super(props);
    this.displayRegions = this.displayRegions.bind(this);
  }

  displayRegions(regionsName, regionsTreeData) {
    return regionsName.map((title, ind) => {
      return(
        <DataTreeList
          key={ind}
          title={title}
          listName={regionsTreeData[title]}
        />
      )
    })
  }

  render () {
    const {
      regionsName,
      displayBranchList,
      height,
      heightDataTree,
      onButtonClick,
      open
    } = this.props;
    const openList = {height: heightDataTree};
    const closeList = {
      height: heightDataTree,
      width: 0,
      padding: 0,
      margin: 0
    };
    return (
      <div className={classes.wrapListBranch}
        style={open ? openList : closeList}
      >
        <div className={classes.buttonWrap}>
          <Button
            open={true}
            onClick={onButtonClick}
          />
        </div>
        <div className={classes.listWrap} style={{height}}>
          {this.displayRegions(regionsName, displayBranchList)}
        </div>
      </div>
    );
  }
}