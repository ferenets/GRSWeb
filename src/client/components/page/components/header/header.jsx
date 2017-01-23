import classes from './header.scss';
import React from 'react';
import {browserHistory, Link} from 'react-router';
import {signout} from '../../../../redux/profile/profile.actions';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import IconDashboard from 'material-ui/svg-icons/action/dashboard';
import IconPerson from 'material-ui/svg-icons/social/person';
import IconLogout from 'material-ui/svg-icons/navigation/cancel';

import HeaderLink from './components/header-link';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      dispatch,
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
        
        <div className={classes.authMenu}>
          <IconMenu
            key={0}
            iconButtonElement={
              <IconButton
                style={styles.iconButton}
              >
                <IconPerson color="#858585" />
              </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          >

            <MenuItem
              primaryText="Log In"
              onTouchTap={() => browserHistory.push('/login')}
            />

          </IconMenu>
        </div>
        
        <div className={classes.authLinks}>
          <HeaderLink to="/login">Вхід</HeaderLink>
        </div>
        
      </div>
    );
    
    const avatarUrl = '/images/NoAvatar.png';
    
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
                <div
                  className={classes.avatar}
                  style={{ backgroundImage: `url('${avatarUrl}')`}}
                ></div>
                </span>
              </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          >

            {(() => {
              if (role === 'admin') {
                return (
                  <MenuItem
                    primaryText="Dashboard"
                    leftIcon={<IconDashboard />}
                    onTouchTap={() => browserHistory.push('/dashboard')}
                  />
                );
              }
              return (null);
            })()}

            <Divider />

            <MenuItem
              primaryText="Log Out"
              leftIcon={<IconLogout />}
              onTouchTap={() => dispatch(signout())}
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
              <div className={classes.lin}>
                <HeaderLink to="/">Домашня сторінка</HeaderLink>
              </div>
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
