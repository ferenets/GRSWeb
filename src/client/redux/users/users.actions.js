import UserApi from '../../api/user.api';
import {createAsyncAction} from '../../../client/libs/redux-helpers';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const getUsers = createAsyncAction({
  fn: UserApi.get,
  success: (body) => ({type: GET_USERS_SUCCESS, body}),
  error: (err) => ({type: GET_USERS_FAIL, err})
});

export const OPEN_USER_EDITOR = 'OPEN_USER_EDITOR';
export const CLOSE_USER_EDITOR = 'CLOSE_USER_EDITOR';

export const openEditor = (editMode, login, fname, sname) => ({type: OPEN_USER_EDITOR, editMode, login, fname, sname});
export const closeEditor = () => ({type: CLOSE_USER_EDITOR});

export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const CHANGE_USER_LOGIN = 'CHANGE_USER_LOGIN';
export const TOGGLE_USER_UPDATE_PASSWORD = 'TOGGLE_USER_UPDATE_PASSWORD';
export const CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD';
export const CHANGE_USER_CPASSWORD = 'CHANGE_USER_CPASSWORD';

export const changeField = (field, value) => ({type: CHANGE_USER_FIELD, field, value});
export const changeLogin = (login) => ({type: CHANGE_USER_LOGIN, login});
export const toggleUpdatePassword = () => ({type: TOGGLE_USER_UPDATE_PASSWORD});
export const changePassword = (pwd) => ({type: CHANGE_USER_PASSWORD, pwd});
export const changeConfirmPassword = (cpwd) => ({type: CHANGE_USER_CPASSWORD, cpwd});

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const create = createAsyncAction({
  fn: UserApi.create,
  success: (body) => ({ type: CREATE_USER_SUCCESS, body }),
  error: (err) => ({ type: CREATE_USER_FAIL, err })
});

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

export const update = createAsyncAction({
  fn: UserApi.update,
  success: (body) => ({ type: UPDATE_USER_SUCCESS, body }),
  error: (err) => ({ type: UPDATE_USER_FAIL, err })
});

// export const BAN_USER_SUCCESS = 'BAN_USER_SUCCESS';
// export const BAN_USER_FAIL = 'BAN_USER_FAIL';
// export const APPROVE_USER_SUCCESS = 'APPROVE_USER_SUCCESS';
// export const APPROVE_USER_FAIL = 'APPROVE_USER_FAIL';
export const REMOVE_USER_SUCCESS = 'REMOVE_USER_SUCCESS';
export const REMOVE_USER_FAIL = 'REMOVE_USER_FAIL';

// export const ban = createAsyncAction({
//   fn: UserApi.ban,
//   success: (body) => ({ type: BAN_USER_SUCCESS, body }),
//   error: (err) => ({ type: BAN_USER_FAIL, err })
// });
//
// export const approve = createAsyncAction({
//   fn: UserApi.approve,
//   success: (body) => ({ type: APPROVE_USER_SUCCESS, body }),
//   error: (err) => ({ type: APPROVE_USER_FAIL, err })
// });

export const remove = createAsyncAction({
  fn: UserApi.remove,
  success: (body) => ({ type: REMOVE_USER_SUCCESS, body }),
  error: (err) => ({ type: REMOVE_USER_FAIL, err })
});

export const START_USERS_LOADING = 'START_USERS_LOADING';
export const CLOSE_USERS_SNACKBAR = 'CLOSE_USERS_SNACKBAR';

export const startLoading = () => ({type: START_USERS_LOADING});
export const closeSnackbar = () => ({type: CLOSE_USERS_SNACKBAR});
