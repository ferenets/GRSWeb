import classes from './home.scss';
import React from 'react';

import {connect} from 'react-redux';
import {
    startLoading,
    getDataSheet
} from '../../redux/home/home.actions';

import Page from '../../components/page';
import HomeInnerWrap from '../../components/home';
import Loading from '../../components/info/loading';

class Home extends React.Component {

    componentDidMount() {
        const {dispatch, dataHome} = this.props;
        dispatch(startLoading());
        dispatch(getDataSheet({ dataHome }))
    }

    render() {
        const {points, displayBranch} = this.props.dataHome;
        return (
            <Page>
                <div className={classes.home}>
                    { points.length
                        ?
                        <HomeInnerWrap
                            displayBranchList={displayBranch} />
                        : <Loading /> }
                </div>
            </Page>
        );
    }
}

const selector = (state) => ({dataHome: state.dataHome});
export default connect(selector)(Home);