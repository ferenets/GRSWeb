import React from 'react';
import {connect} from 'react-redux';
import {fetchProfile} from '../../redux/profile/profile.actions';
// import {storageAvailable} from '../../utils/project-tricks';

import _Header from '../../components/page/components/header';

const hasCookie = (name) => {
  const pairs = document.cookie.split(";");

  for ( let i = 0; i < pairs.length; ++i ) {
    if (pairs[i].split("=")[0].trim() === name) return true;
  }
  return false;
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch, profile:{isLoaded, logout}} = this.props;

    if (hasCookie('jwt')) {
      dispatch(fetchProfile());
    }
  }

  render() {
    return (
      <_Header {...this.props} />
    );
  }
}

const selector = (state) => ({profile: state.profile, randomLetter: state.randomLetter, root: state.root});

export default connect(selector)(Header);
