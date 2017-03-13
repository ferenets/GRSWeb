import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { browserHistory } from 'react-router';

import login from './login/login.reducer';
import profile from './profile/profile.reducer';
import users from './users/users.reducer';
import home from './home/home.reducer';

const reducers = combineReducers({
  login,
  profile,
  users,
  home,
  routing: routeReducer,
});

const middleware = [thunk, syncHistory(browserHistory)];
const createStoreFn = applyMiddleware(...middleware)(createStore);
const store = createStoreFn(reducers);

export default store;
