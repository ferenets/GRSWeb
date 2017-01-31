import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Button extends React.Component {
  render() {
    const {open, onClick} = this.props;

    const styles = {
      root: {
        minWidth: 20,
        maxWidth: 50,
        padding: 0,
        height: 25
      },
      label: {
        fontSize: 20,
        lineHeight: '20px',
        fontWeight: 900
      }
    };

    return (
      <RaisedButton
        label={open ? '\u2039\u2039' : '\u203A\u203A'}
        style={styles.root}
        secondary={true}
        labelStyle={styles.label}
        labelColor="#fff"
        onClick={onClick}
      />
    )
  }
}

Button.PropTypes = {
  onClick: React.PropTypes.func.isRequired,
  open: React.PropTypes.bool.isRequired,
};