import classes from './caption.scss';
import React from 'react';

export default class Caption extends React.Component {
  render () {
    const {mainText, subText} = this.props;

    return (
      <div className={classes.caption}>
        
        { mainText !== '' ? <div className={classes.mainCaption}>{mainText}</div> : null }
        
        { subText !== '' ? <div className={classes.subCaption}>{subText}</div> : null }
        
      </div>
    );
  }
};
