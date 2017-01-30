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
                    value={title}
                />
            )
        })
    }

    render () {
        const {regionsName, displayBranchList, height, handleFullWidht, fullWidthList} = this.props;
        const openList = {height};
        const closeList = {
            height,
            width: 0,
            padding: 0,
            margin: 0
        };

        return (
            <div
                className={classes.wrapListBranch}
                style={fullWidthList ? openList : closeList}
            >
                <Button
                    open={true}
                    float={"right"}
                    buttonOnClick={handleFullWidht}
                />
                <div className={classes.listWrap} >
                    {this.displayRegions(regionsName, displayBranchList)}
                </div>
            </div>
        );
    }
}