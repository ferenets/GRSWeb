import React from 'react';
import {connect} from 'react-redux';
import {fetchProfile} from '../../redux/profile/profile.actions';
import {signout} from '../../redux/profile/profile.actions';
import {hasCookie} from '../../utils/tricks';

import _Header from '../../components/page/components/header';

class Header extends React.Component {
  constructor(props) {
    super(props);
    
     this.signout = this.signout.bind(this);
  }

  componentDidMount() {
    const {dispatch} = this.props;

    if (hasCookie('jwt')) {
      dispatch(fetchProfile());
    }
  }

  signout() {
    const {dispatch, profile:{}} = this.props;
    
    dispatch(signout());
  }

  render() {
    return (
      <_Header
        onSignout={this.signout}
        profile={this.props.profile}
      />
    );
  }
}

Header.PropTypes = {
  dispatch: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object.isRequired
};

const selector = (state) => ({profile: state.profile});

export default connect(selector)(Header);
