import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {amber700} from 'material-ui/styles/colors';

export default class Button extends React.Component {
  render() {
    const {open, onClick} = this.props;
    const styles = {
      root: {
        minWidth: 20,
        maxWidth: 50,
        padding: 0,
        height: 25,
      },
      label: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 20 + 'px',
        fontWeight: 900,
      }
    };
    return (
      <RaisedButton
        label={open ? '\u2039\u2039' : '\u203A\u203A'}
        style={styles.root}
        labelStyle={styles.label}
        onClick={onClick}
        backgroundColor={amber700}
      />
    )
  }
}