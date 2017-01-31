import classes from './data-tree.scss';
import React from 'react';
import DataTreeList from './data-tree-list.jsx';
import Button from '../buttons/button.jsx';

export default class DataTree extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {
      regionNames,
      displayBranch,
      onButtonClick,
      open
    } = this.props;

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
          {regionNames.map((title, ind) => (
            <DataTreeList
              key={ind}
              title={title}
              listName={displayBranch[title]}
            />
          ))}
        </div>
      </div>
    );
  }
}