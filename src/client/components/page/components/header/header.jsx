import classes from './header.scss';
import React from 'react';
import {browserHistory} from 'react-router';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import IconDashboard from 'material-ui/svg-icons/action/dashboard';
import IconLogout from 'material-ui/svg-icons/navigation/cancel';

import HeaderLink from './components/header-link';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onSignout,
      profile: {
        user: {email, role},
        isLoaded,
        logout
      }
    } = this.props;

    const styles = {
      iconButton: {
        verticalAlign: 'top',
        padding: 0
      }
    };
    
    const auth = (
      <div className={classes.auth}>
        <HeaderLink to="/login">Вхід</HeaderLink>
      </div>
    );

    const user = (
      <div className={classes.user}>
        <div className={classes.userMenu}>
          <IconMenu
            key={0}
            iconButtonElement={
              <IconButton
                tooltip={email}
                tooltipPosition="bottom-left"
                touch={true}
                style={styles.iconButton}
              >
                <span>
                  <div className={classes.avatar}></div>
                </span>
              </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          >

            {role === 'admin'
              ? <MenuItem
                  primaryText="Панель керування"
                  leftIcon={<IconDashboard />}
                  onTouchTap={() => browserHistory.push('/dashboard')}
                />
              : null
            }

            <Divider />

            <MenuItem
              primaryText="Вихід"
              leftIcon={<IconLogout />}
              onTouchTap={onSignout}
            />

          </IconMenu>
        </div>
      </div>
    );

    return (
      <div className={classes.header}>
        <div className={classes.title}>
          <div className={classes.links}>
            <div className={classes.left}>
              <HeaderLink to="/">GRS WEB</HeaderLink>
            </div>
              
            <div className={classes.right}>
              {!logout && isLoaded ? user : auth}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onSignout: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object.isRequired,
};
