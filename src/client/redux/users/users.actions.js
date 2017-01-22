import UserApi from '../../api/user.api';
import {createAsyncAction} from '../../../client/libs/redux-helpers';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const getUsers = createAsyncAction({
  fn: UserApi.get,
  success: (body) => ({type: GET_USERS_SUCCESS, body}),
  error: (err) => ({type: GET_USERS_FAIL, err})
});

export const CLOSE_USERS_SNACKBAR = 'CLOSE_USERS_SNACKBAR';

export const closeUsersSnackbar = () => ({type: CLOSE_USERS_SNACKBAR});
