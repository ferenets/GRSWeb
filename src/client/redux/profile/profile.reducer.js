import {
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './profile.actions.js';

const initalState = {
  user: {},
  isLoaded: false,
  logout: true,
  err: null
};

export default function (state = initalState, action) {
  switch (action.type) {
    
    case FETCH_PROFILE_SUCCESS:
      const {user} = action.body;

      return Object.assign({}, state, { 
        user,
        isLoaded: true,
        logout: false,
        err: null
      });

    case FETCH_PROFILE_FAIL:
      return Object.assign({}, state, initalState, {err: action.err});

    case LOGIN_SUCCESS:
     return Object.assign({}, state, { logout: false });
    
    case LOGIN_FAIL:
     return Object.assign({}, state, {err: action.err});

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, initalState);

    case LOGOUT_FAIL:
      return Object.assign({}, state, {err: action.err});
    
    default:
      return state;
  }
}
