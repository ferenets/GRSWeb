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
    return AppError.badRequest('E-mail вже використовується', {code: 102});
  },
  invalidCredentials: function () {
    return AppError.badRequest('Невірний E-mail або пароль!', {code: 103});
  },
  passwordsMismatch: function () {
    return AppError.badRequest('Паролі не співпадають', {code: 103});
  },
  missedSignupData: function () {
    return AppError.badRequest('Деякі з введений даних не співпадають', {code: 104});
  },
  missedEmail: function () {
    return AppError.badRequest('Не встановлений E-mail', {code: 104});
  },
  missedPassword: function () {
    return AppError.badRequest('Не встановлений пароль', {code: 104});
  },
  missedPasswordOrEmail: function () {
    return AppError.badRequest('Не встановлений E-mail або пароль', {code: 104});
  },
  invalidAuthorizationHeader: function () {
    return AppError.badRequest('Невірний заголовок авторизації', {code: 105});
  },

  invalidToken: function () {
    return AppError.badRequest('Невірний токен для авторизації', {code: 106});
  },

  expired: function () {
    return AppError.badRequest('Закінчився термін дії токена для авторизації', {code: 107});
  },

  requiredInviteCode: function () {
    return AppError.badRequest('Потрібен запрошувальний код', {code: 108});
  }
};

module.exports = AuthErrors;
