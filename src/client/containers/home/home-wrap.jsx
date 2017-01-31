import React from 'react';
import classes from './home-wrap.scss';
import {connect} from 'react-redux';
import {getDataSheet} from '../../redux/home/home.actions';
import Page from '../../components/page';
import Home from '../../components/home';
import Loading from '../../components/info/loading';

class HomeWrap extends React.Component {

  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(getDataSheet());
  }

  render() {
    const {home:{loading, regionNames, displayBranch}} = this.props;

    return (
      <Page>
        <div className={classes.homeWrap}>
          {loading
            ? <Loading />
            : <Home
              displayBranch={displayBranch}
              regionNames={regionNames}
            />
          }
        </div>
      </Page>
    );
  }
}

const selector = (state) => ({home: state.home});

export default connect(selector)(HomeWrap);
