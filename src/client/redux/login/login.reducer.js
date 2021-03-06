import {
  CHANGE_LOGIN_LOGIN,
  CHANGE_LOGIN_PASSWORD,
  CLEAR_LOGIN_INPUTS,
  CLOSE_LOGIN_DIALOG,
  START_LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './login.actions';

const initalState = {
  login: '',
  pwd: '',

  loading: false,
  dialogIsOpen: false,
  dialogMsg: '',
  err: null,
};

export default function (state = initalState, action) {
  switch (action.type) {

    case CHANGE_LOGIN_LOGIN:
      return Object.assign({}, state, { login: action.login });

    case CHANGE_LOGIN_PASSWORD:
      return Object.assign({}, state, { pwd: action.pwd });

    case CLEAR_LOGIN_INPUTS:
      return Object.assign({}, state, initalState);

    case CLOSE_LOGIN_DIALOG:
      return Object.assign({}, state, { dialogIsOpen: false, dialogMsg: '', err: null });

    case START_LOGIN_LOADING:
      return Object.assign({}, state, { loading: true });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        err: null,
      });

    case LOGIN_FAIL:
      return Object.assign({}, state, {
        loading: false,
        dialogIsOpen: true,
        dialogMsg: `${action.err.message}`,
        err: action.err,
      });

    default:
      return state;
  }
}
