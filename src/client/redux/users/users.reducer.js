import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  OPEN_USER_EDITOR,
  CLOSE_USER_EDITOR,
  CHANGE_USER_LOGIN,
  CHANGE_USER_FIELD,
  TOGGLE_USER_UPDATE_PASSWORD,
  CHANGE_USER_PASSWORD,
  CHANGE_USER_CPASSWORD,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAIL,
  CLOSE_USERS_SNACKBAR,
} from './users.actions';

import {
  validateStr,
  nameValidator,
  loginValidator,
  pwdValidator,
} from '../../utils/validators';

export const checkSumbitEnabled = (state) => {
  const errors = [
    state.loginError,
    state.fnameError,
    state.snameError,
  ];

  if (state.updatePassword) {
    return state.pwdError === '' && state.cpwdError === '' && !errors.find(err => err !== '');
  }

  return !errors.find(err => err !== '');
};


const initalState = {
  users: [],
  usersLoaded: false,

  editorStarted: false,
  editMode: false,
  login: '',
  loginError: 'Необхідне поле',
  fname: '',
  fnameError: 'Необхідне поле',
  sname: '',
  snameError: 'Необхідне поле',
  updatePassword: false,
  pwd: '',
  pwdError: 'Необхідне поле',
  cpwd: '',
  cpwdError: 'Необхідне поле',
  submitEnabled: false,

  loading: false,
  snackbarIsOpen: false,
  msg: '',
  err: null,
};

export default function (state = initalState, action) {
  switch (action.type) {

    case OPEN_USER_EDITOR: {
      const { editMode, login, fname, sname } = action;
      const loginError = validateStr(login, loginValidator);
      const fnameError = validateStr(fname, nameValidator);
      const snameError = validateStr(sname, nameValidator);

      const nextState = Object.assign({}, state, {
        editorStarted: true,
        editMode,
        login,
        loginError,
        fname,
        fnameError,
        sname,
        snameError,
        updatePassword: !editMode,
      });

      nextState.submitEnabled = checkSumbitEnabled(nextState);

      return nextState;
    }

    case CLOSE_USER_EDITOR:
      return Object.assign({}, state, {
        editorStarted: false,
        editMode: false,
        login: '',
        loginError: 'Необхідне поле',
        fname: '',
        fnameError: 'Необхідне поле',
        sname: '',
        snameError: 'Необхідне поле',
        updatePassword: false,
        pwd: '',
        pwdError: 'Необхідне поле',
        cpwd: '',
        cpwdError: 'Необхідне поле',
        submitEnabled: false,
      });

    case CHANGE_USER_LOGIN: {
      const { login } = action;
      const loginError = validateStr(login, loginValidator);

      const nextState = Object.assign({}, state, {
        login,
        loginError,
      });

      nextState.submitEnabled = checkSumbitEnabled(nextState);

      return nextState;
    }

    case CHANGE_USER_FIELD: {
      const { field, value } = action;
      const error = validateStr(value, nameValidator);
      const nextErr = `${field}Error`;

      const nextState = Object.assign({}, state, {
        [field]: value,
        [nextErr]: error,
      });

      nextState.submitEnabled = checkSumbitEnabled(nextState);

      return nextState;
    }

    case TOGGLE_USER_UPDATE_PASSWORD: {
      const nextState = Object.assign({}, state, {
        updatePassword: !state.updatePassword,
      });

      nextState.submitEnabled = checkSumbitEnabled(nextState);

      return nextState;
    }

    case CHANGE_USER_PASSWORD: {
      const { pwd } = action;
      const pwdError = validateStr(pwd, pwdValidator);
      let { cpwdError, cpwd } = state;

      if (cpwdError === '' && cpwd !== '' && pwd !== cpwd) {
        cpwdError = 'Паролі не співпадають';
      } else if (cpwdError === 'Паролі не співпадають' && pwd === cpwd) {
        cpwdError = '';
      }

      const nextState = Object.assign({}, state, {
        pwd,
        pwdError,
        cpwdError,
      });

      nextState.submitEnabled = checkSumbitEnabled(nextState);

      return nextState;
    }

    case CHANGE_USER_CPASSWORD: {
      const { cpwd } = action;
      let cpwdError = validateStr(cpwd, pwdValidator);

      if (cpwd !== '' && cpwdError === '' && cpwd !== state.pwd) {
        cpwdError = 'Паролі не співпадають';
      }

      const nextState = Object.assign({}, state, { cpwd, cpwdError });

      nextState.submitEnabled = checkSumbitEnabled(nextState);

      return nextState;
    }

    case CREATE_USER_SUCCESS: {
      const { user } = action.body;

      return Object.assign({}, state, {
        // push to users
        users: [
          ...state.users,
          user,
        ],

        // close editor
        editorStarted: false,
        editMode: false,
        login: '',
        loginError: 'Необхідне поле',
        fname: '',
        fnameError: 'Необхідне поле',
        sname: '',
        snameError: 'Необхідне поле',
        updatePassword: false,
        pwd: '',
        pwdError: 'Необхідне поле',
        cpwd: '',
        cpwdError: 'Необхідне поле',
        submitEnabled: false,

        // show snackbar
        loading: false,
        snackbarIsOpen: true,
        msg: `Користувача "${user.login}" створено`,
        err: null,
      });
    }

    case CREATE_USER_FAIL:
      return Object.assign({}, state, {
        loading: false,
        snackbarIsOpen: true,
        msg: `${action.err.message}`,
        err: action.err,
      });

    case UPDATE_USER_SUCCESS: {
      const { user: { login } } = action.body;
      const index = state.users.findIndex(user => user.login === login);

      return Object.assign({}, state, {
        users: [
          ...state.users.slice(0, index),
          action.body.user,
          ...state.users.slice(index + 1),
        ],

        editorStarted: false,
        editMode: false,
        login: '',
        loginError: 'Необхідне поле',
        fname: '',
        fnameError: 'Необхідне поле',
        sname: '',
        snameError: 'Необхідне поле',
        updatePassword: false,
        pwd: '',
        pwdError: 'Необхідне поле',
        cpwd: '',
        cpwdError: 'Необхідне поле',
        submitEnabled: false,

        loading: false,
        snackbarIsOpen: true,
        msg: `Користувача "${login}" оновлено`,
        err: null,
      });
    }

    case UPDATE_USER_FAIL:
      return Object.assign({}, state, {
        loading: false,
        snackbarIsOpen: true,
        msg: `${action.err.message}`,
        err: action.err,
      });

    case REMOVE_USER_SUCCESS: {
      const { user: { login } } = action.body;
      const index = state.users.findIndex(user => user.login === login);
      const closeEditor = state.editorStarted && state.login === login;
      const nextState = Object.assign({}, state, {
        loading: false,
        users: [
          ...state.users.slice(0, index),
          ...state.users.slice(index + 1),
        ],
        snackbarIsOpen: true,
        msg: `Користувача "${login}" видалено`,
        err: null,
      });

      if (closeEditor) {
        nextState.editorStarted = false;
        nextState.editMode = false;
        nextState.login = '';
        nextState.loginError = 'Необхідне поле';
        nextState.fname = '';
        nextState.fnameError = 'Необхідне поле';
        nextState.sname = '';
        nextState.snameError = 'Необхідне поле';
        nextState.updatePassword = false;
        nextState.pwd = '';
        nextState.pwdError = 'Необхідне поле';
        nextState.cpwd = '';
        nextState.cpwdError = 'Необхідне поле';
        nextState.submitEnabled = false;
      }

      return nextState;
    }

    case REMOVE_USER_FAIL:
      return Object.assign({}, state, {
        loading: false,
        snackbarIsOpen: true,
        msg: `${action.err.message}`,
        err: action.err,
      });

    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.body.users,
        usersLoaded: true,
      });

    case GET_USERS_FAIL:
      return Object.assign({}, state, initalState, {
        snackbarIsOpen: true,
        msg: `${action.err.message}`,
        err: action.err,
      });

    case CLOSE_USERS_SNACKBAR:
      return Object.assign({}, state, { snackbarIsOpen: false });

    default:
      return state;
  }
}
