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
            height: 'auto',
            fullWidthListMap: true,
        };
        this.handleFullWidht = this.handleFullWidht.bind(this);
    };

    componentDidMount() {
        const headerHeight = parseInt(Constants['headerHeight'].slice(0, -2));
        const footerHeight = parseInt(Constants['footerHeight'].slice(0, -2));
        const padding = parseInt(Constants['paddingDuble'].slice(0, -2));
        const height = window.innerHeight - headerHeight - footerHeight - padding * 2;
        this.setState({height: `${height}px`});
    };

    handleFullWidht() {
        this.setState({
            fullWidthListMap: !this.state.fullWidthListMap
        });
    };

    render() {
        const {displayBranchList} = this.props;
        const {height, fullWidthListMap} = this.state;

        return (
            <div className={classes.homeWrap} >
                <DataTree
                    regionsName={_.keys(displayBranchList)}
                    displayBranchList={displayBranchList}
                    fullWidthList={fullWidthListMap}
                    handleFullWidht={this.handleFullWidht}
                    height={height}
                />
                <PointsMap
                    fullWidthMap={fullWidthListMap}
                    handleFullWidht={this.handleFullWidht}
                    height={this.state.height}
                />
            </div>
        );
    }

}