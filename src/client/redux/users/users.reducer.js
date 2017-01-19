import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  CLOSE_USERS_SNACKBAR
} from './users.actions';

const initalState = {
  users: [],
  usersLoaded: false,

  loading: false,
  snackbarIsOpen: false,
  msg: '',
  err: null
};

export default function (state = initalState, action) {
  switch (action.type) {

    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.body.users,
        usersLoaded: true
      });

    case GET_USERS_FAIL:
      return Object.assign({}, state, initalState, {
        snackbarIsOpen: true,
        msg: `${action.err.message}`,
        err: action.err
      });

    case CLOSE_USERS_SNACKBAR:
      return Object.assign({}, state, { snackbarIsOpen: false });

    default:
      return state;
  }
}
