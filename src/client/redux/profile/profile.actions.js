import ProfileApi from '../../api/profile.api.js';
import {createAsyncAction} from '../../../client/libs/redux-helpers';
import {resetToken} from '../../utils/auth.utils';
import {browserHistory} from 'react-router';

export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCESS';
export const FETCH_PROFILE_FAIL = 'FETCH_PROFILE_FAIL'; 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const fetchProfile = createAsyncAction({
  fn: ProfileApi.fetch,
  success: (body) => ({type: FETCH_PROFILE_SUCCESS, body}),
  error: (err) => {
    if (err.status === 400 || err.status === 403) {
      browserHistory.push('/login');
    }
    return {type: FETCH_PROFILE_FAIL, err};
  }
});

/**
 *
 */
export const signout = () => {
  resetToken();
  browserHistory.push('/login');
  return {type: LOGOUT_SUCCESS};
};
