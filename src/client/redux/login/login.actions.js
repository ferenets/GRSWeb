import AuthApi from '../../api/auth.api';
import {createAsyncAction} from '../../../client/libs/redux-helpers';

export const CHANGE_LOGIN_EMAIL = 'CHANGE_LOGIN_EMAIL';
export const CHANGE_LOGIN_PASSWORD = 'CHANGE_LOGIN_PASSWORD';
export const CLEAR_LOGIN_INPUTS = 'CLEAR_LOGIN_INPUTS';
export const CLOSE_LOGIN_DIALOG = 'CLOSE_LOGIN_DIALOG';

export const START_LOGIN_LOADING = 'START_LOGIN_LOADING';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const changeLoginEmail = (email) => ({type: CHANGE_LOGIN_EMAIL, email});
export const changeLoginPassword = (pwd) => ({type: CHANGE_LOGIN_PASSWORD, pwd});
export const clearLoginInputs = () => ({type: CLEAR_LOGIN_INPUTS});
export const closeLoginDialog = () => ({type: CLOSE_LOGIN_DIALOG});

export const startLoginLoading = () => ({type: START_LOGIN_LOADING});

export const login = createAsyncAction({
  fn: AuthApi.login,
  success: (body) => ({type: LOGIN_SUCCESS, body}),
  error: (err) => ({type: LOGIN_FAIL, err})
});
