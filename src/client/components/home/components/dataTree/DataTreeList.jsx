import classes from './DataTree.scss';
import React from 'react';

export default class ListElementTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            nameArray: [],
            title: this.props.title
        };
        this.openNextBranch = this.openNextBranch.bind(this);
        this.takeName = this.takeName.bind(this);
    }

    takeName(object) {
        const allInhabitedLocalityName = [];
        for (let propName in object) {
            allInhabitedLocalityName.push(propName);
        }
        return allInhabitedLocalityName;
    }

    openNextBranch(event) {
        const {title, listName, value} = this.props;
        event.preventDefault();
        const label = event.target.getAttribute('value');
        const name = this.takeName(listName);

        if (label == title) {
            this.setState({
                checked: !this.state.checked,
                nameArray: name
            });
        }
    }

    render () {
        const {title, listName} = this.props;
        return (
            <div className={classes.listTitle}>
              <span value={title} onClick={this.openNextBranch}>
                  {title}
              </span>
              {this.state.checked
                ?
                this.state.nameArray.map((title, ind) => {
                  return(
                    <ListElementTitle
                      key={ind}
                      title={title}
                      value={title}
                      listName={listName[title]}
                    />
                  )})
                : null
              }
            </div>
        );
    }
}
