import classes from './DataTree.scss';
import React from 'react';
import _ from 'lodash';

export default class ListElementTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      nameArray: [],
      title: this.props.title
    };
    this.openNextBranch = this.openNextBranch.bind(this);
  }

  openNextBranch() {
    const {listName} = this.props;
    const name = _.keys(listName);
    this.setState({
      checked: !this.state.checked,
      nameArray: name
    });
  }

  render () {
    const {title, listName} = this.props;
    return (
      <div className={classes.listTitle}>
        <span onClick={this.openNextBranch}>
          {title}
        </span>
        {this.state.checked
          ? this.state.nameArray.map((title, ind) => {
            return(
              <ListElementTitle
                key={ind}
                title={title}
                listName={listName[title]}
              />
            )
          })
          : null
        }
      </div>
    );
  }
}
