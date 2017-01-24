import classes from './HomeInnerWrap.scss';
import React from 'react';
import RegionsList from './components/list';
import PointsMap from './components/map';

import Constants from '../../containers/root/constants.scss';

export default class HomeInnerWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 'auto',
            open: true
        };
        this.regionsTree = this.regionsTree.bind(this);
        this.openListMap = this. openListMap.bind(this);
    };

    componentDidMount() {
        const headerHeight = Constants['headerHeight'].slice(0, -2);
        const footerHeight = Constants['footerHeight'].slice(0, -2);
        const height = window.innerHeight - headerHeight - footerHeight;

        this.setState({
            height: height +'px'
        });
    };

    regionsTree(object) {
        const allRegionsName = [];
        for (let propName in object) {
            allRegionsName.push(propName);
        }
        return allRegionsName;
    };

    openListMap() {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        const {displayBranchList} = this.props;
        return (
            <div
                className={classes.homeWrap}
                style={{minHeight: this.state.height}}
            >
                <RegionsList
                    regionsName={this.regionsTree(displayBranchList)}
                    displayBranchList={displayBranchList}
                    open={this.state.open}
                    triggerBox={this.openListMap}
                />
                <PointsMap
                    open={this.state.open}
                    triggerBox={this.openListMap}
                />
            </div>
        );
    }

}

// onClick={this.openListMap}