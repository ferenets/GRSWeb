import React from 'react';
import classes from './shadow-box.scss';

export default class ShadowBox extends React.Component {
 render() {
   return (
     <div className={classes.shadowBox}>
       {this.props.children}
     </div>
   );
 }
} 