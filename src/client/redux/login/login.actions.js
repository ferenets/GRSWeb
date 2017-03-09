import AuthApi from '../../api/auth.api';
import { browserHistory } from 'react-router';
import { createAsyncAction } from '../../../client/libs/redux-helpers';

export const CHANGE_LOGIN_LOGIN = 'CHANGE_LOGIN_LOGIN';
export const CHANGE_LOGIN_PASSWORD = 'CHANGE_LOGIN_PASSWORD';
export const CLEAR_LOGIN_INPUTS = 'CLEAR_LOGIN_INPUTS';
export const CLOSE_LOGIN_DIALOG = 'CLOSE_LOGIN_DIALOG';

export const START_LOGIN_LOADING = 'START_LOGIN_LOADING';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const changeLogin = login => ({ type: CHANGE_LOGIN_LOGIN, login });
export const changePassword = pwd => ({ type: CHANGE_LOGIN_PASSWORD, pwd });
export const clearInputs = () => ({ type: CLEAR_LOGIN_INPUTS });
export const closeDialog = () => ({ type: CLOSE_LOGIN_DIALOG });

export const startLoading = () => ({ type: START_LOGIN_LOADING });

export const submit = createAsyncAction({
  fn: AuthApi.login,
  success: (body) => {
    browserHistory.push('/');

    return { type: LOGIN_SUCCESS, body };
  },
  error: err => ({ type: LOGIN_FAIL, err }),
});
