import React from 'react';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';
import {checkAndSetJWT} from '../utils/auth.utils';

import Dashboard from '../components/routes/admin/dashboard';
import Users from '../containers/users';
import Root from '../containers/root';
import NotFound from '../components/info/not-found';
import Home from '../components/routes/user/home';
import Login from '../containers/login';

const requireJWT = (state, replace) => {
  if(!checkAndSetJWT() && state.location.pathname !== 'login') {
    replace('/login');
  }
};

export default (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Root} >

      {/* GUEST ROUTES */}
      <Route path="login" component={Login}  />

      {/* USER ROUTES */}
      <IndexRoute component={Home} onEnter={requireJWT} />

      {/* ADMIN ROUTES */}
      <Route path="dashboard" component={Dashboard} onEnter={requireJWT} />
      <Route path="dashboard/users" component={Users} onEnter={requireJWT} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
