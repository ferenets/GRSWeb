import classes from './snackbar.scss';
import React from 'react';

import Snackbar from 'material-ui/Snackbar';

export default class SnackBar extends React.Component {
  render () {
    const {error, open, message, onRequestClose} = this.props;
    
    const styles = {
      snackbar: {
        backgroundColor: error ? '#f44336' : '#4CAF50',
        fontWeight: 600,
        textAlign: 'center'
      }
    };

    return (
      <Snackbar
        autoHideDuration={error ? 6000 : 4000}
        bodyStyle={styles.snackbar}
        className={classes.snackbar}
        open={open}
        message={message}
        onRequestClose={onRequestClose}
      />
    );
  }
}

SnackBar.propTypes = {
  open: React.PropTypes.bool.isRequired,
  error: React.PropTypes.bool.isRequired,
  message: React.PropTypes.string.isRequired,
  onRequestClose: React.PropTypes.func.isRequired
};
