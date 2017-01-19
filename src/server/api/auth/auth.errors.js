'use strict';

const AppError = require('../../libs/app-error');

/**
 * @apiDefine AuthErrors
 *
 * @apiError (Error code) 102 Email already used
 * @apiError (Error code) 103 Password mismatch
 * @apiError (Error code) 104 Required signup data is not set
 * @apiError (Error code) 105 Invalid Authorization Header
 * @apiError (Error code) 106 Invalid token
 * @apiError (Error code) 107 Token Expired
 * @apiError (Error code) 107 Required invite code
 *
 */

const AuthErrors = {
  userExist: function () {
    return AppError.badRequest('Email already used', {code: 102});
  },
  invalidCredentials: function () {
    return AppError.badRequest('Invalid e-mail or password!', {code: 103});
  },
  passwordsMismatch: function () {
    return AppError.badRequest('Passwords do not match', {code: 103});
  },
  missedSignupData: function () {
    return AppError.badRequest('Some of required sign up data is not set', {code: 104});
  },
  missedEmail: function () {
    return AppError.badRequest('Email is not set', {code: 104});
  },
  missedPassword: function () {
    return AppError.badRequest('Password is not set', {code: 104});
  },
  missedPasswordOrEmail: function () {
    return AppError.badRequest('Email or Password is not set', {code: 104});
  },
  invalidAuthorizationHeader: function () {
    return AppError.badRequest('Invalid Authorization Header', {code: 105});
  },

  invalidToken: function () {
    return AppError.badRequest('Invalid token', {code: 106});
  },

  expired: function () {
    return AppError.badRequest('Token Expired', {code: 107});
  },

  requiredInviteCode: function () {
    return AppError.badRequest('Required invite code', {code: 108});
  }
};

module.exports = AuthErrors;
