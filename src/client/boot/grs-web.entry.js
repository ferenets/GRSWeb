import 'core-js';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../redux/grs-web.store.js';
import routes from './grs-web.router.jsx';

injectTapEventPlugin();

const app = (
  <Provider store={store}>
    {routes}
  </Provider>
);

ReactDom.render(app, document.getElementById('root'));