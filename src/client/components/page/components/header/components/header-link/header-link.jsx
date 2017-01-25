import classes from './header-link.scss';
import React from 'react';
import {Link} from 'react-router';

export default class HeaderLink extends React.Component {
  render() {
    return (
      <Link
        className={classes.link}
        //activeClassName={classes.activeLink}
        to={this.props.to}
      >
        {this.props.children}
      </Link>
    );
  }
}

HeaderLink.propTypes = { to: React.PropTypes.string.isRequired };
HeaderLink.defaultProps = { to: '/' };
