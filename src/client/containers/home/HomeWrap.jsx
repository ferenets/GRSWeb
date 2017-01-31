import React from 'react';
import classes from './HomeWrap.scss';
import {connect} from 'react-redux';
import {
    startLoading,
    getDataSheet
} from '../../redux/home/home.actions';

import Page from '../../components/page';
import Home from '../../components/home';
import Loading from '../../components/info/loading';

class HomeWrap extends React.Component {

    componentDidMount() {
        const {dispatch, dataHome} = this.props;
        dispatch(startLoading());
        dispatch(getDataSheet({ dataHome }))
    }

    render() {
        const {points, displayBranch} = this.props.dataHome;
        return (
            <Page>
                <div className={classes.homeWrap}>
                    { points
                        ? <Home displayBranchList={displayBranch} />
                        : <Loading />
                    }
                </div>
            </Page>
        );
    }
}

const selector = (state) => ({dataHome: state.dataHome});
export default connect(selector)(HomeWrap);