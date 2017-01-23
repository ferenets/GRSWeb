import 'normalize.css';
import './reset.scss';
import classes from './root.scss';
import React from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({}, {
  fontFamily: 'Open Sans, sans-serif',
  palette: {
    // textColor: '#5d5d5c',
    // accent1Color: '#13a7e7',
    primary1Color: '#C0CA33',
    // primary2Color: '#C0CA33',
  },
  // radioButton: {
  //   checkedColor: '#13a7e7'
  // },
  // toggle: {
  //   trackOnColor: '#81D4FA',
  //   thumbOnColor: '#13a7e7'
  // },
  // checkbox: {
  //   checkedColor: '#13a7e7'
  // },
  // flatButton: {
  //   primaryTextColor: '#13a7e7',
  //   secondaryTextColor: '#cd1a6b'
  // }
});

class Root extends React.Component {
  render() {
    return (
      <section className={classes.root}>
        <MuiThemeProvider muiTheme={muiTheme}>
          {this.props.children}
        </MuiThemeProvider>
      </section>
    );
  }
}

const selector = (state) => ({});

export default connect(selector)(Root);
