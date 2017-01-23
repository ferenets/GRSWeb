import classes from './dialog.scss';
import React from 'react';

import _Dialog from 'material-ui/Dialog';

export default class Dialog extends React.Component {
  render () {
    const {err, msg} = this.props;

    const styles = {
      title: {
        fontWeight: 600,
        fontSize: '30px',
        lineHeight: '30px',
        padding: '20px 10px 0',
        textAlign: 'center'
      },
      body: {
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '30px',
        padding: '0 5px',
        textAlign: 'center'
      }
    };

    return (
      <_Dialog
        titleStyle={styles.title}
        bodyStyle={styles.body}
        {...this.props}
      >
        <div className={classes.label}>
          <div className={err ? classes.fail : classes.success}>
            {msg}
          </div>
        </div>
        {this.props.children}
      </_Dialog>
    );
  }
}

Dialog.defaultProps = { err: null };