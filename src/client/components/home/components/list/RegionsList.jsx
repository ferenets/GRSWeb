import classes from './RegionsList.scss';
import React from 'react';
import ListElementTitle from './ListElementTitle.jsx';
import Constants from '../../../../containers/root/constants.scss';
import Button from '../buttons/Button.jsx';

export default class RegionsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 'auto',
            open: true
        };
        this.displayRegions = this.displayRegions.bind(this);
    }

    componentDidMount() {
        const headerHeight = Constants['headerHeight'].slice(0, -2);
        const footerHeight = Constants['footerHeight'].slice(0, -2);
        const padding = Constants['paddingInnerHomeWrap'].slice(0, -2);

        const height = window.innerHeight - headerHeight - footerHeight - padding*2;

        this.setState({
            height: height +'px',
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open != this.props.open) {
            this.setState({
                open: nextProps.open
            })
        }
        else {
            this.setState({
                open: this.props.open
            })
        }
    }

    displayRegions(regionsName, regionsTreeData) {
        return regionsName.map((title, ind) => {
            return(
                <ListElementTitle
                    key={ind}
                    title={title}
                    listName={regionsTreeData[title]}
                    value={title}
                />
            )
        })
    }

    render () {
        const openList = {
            height: this.state.height,
        };
        const closeList = {
            height: this.state.height,
            width: 0,
            padding: 0,
            margin: 0
        };
        const {regionsName, displayBranchList} = this.props;
        return (
            <div
                className={classes.wrapListBranch}
                style={this.state.open ? openList : closeList}
            >
                <Button
                    open={this.state.open}
                    float={"right"}
                    triggerBox={this.props.triggerBox}
                />
                <div className={classes.listWrap} >
                    {this.displayRegions(regionsName, displayBranchList)}
                </div>
            </div>
        );
    }
}