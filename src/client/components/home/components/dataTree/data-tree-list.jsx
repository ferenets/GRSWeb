import classes from './data-tree.scss';
import React from 'react';
import _ from 'lodash';

export default class DataTreeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      nameArray: []
    };

    this.openNextBranch = this.openNextBranch.bind(this);
  }

  openNextBranch() {
    this.setState({
      checked: !this.state.checked,
      nameArray: _.keys(this.props.listName)
    });
  }

  render () {
    const {title, listName} = this.props;
    const {checked, nameArray} = this.state;

    return (
      <div className={classes.listTitle}>
       <span onClick={this.openNextBranch}>
         {title}
       </span>
        {checked
          ? nameArray.map((title, ind) =>
            <DataTreeList
              key={ind}
              title={title}
              listName={listName[title]}
            />
          )
          : null
        }
      </div>
    );
  }
}