

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
  notFound: AppError.notFound('Користувача не знайдено', { code: 101 }), //
  userExist: AppError.badRequest("Ім'я користувача вже використовується", { code: 102 }), //
  invalidCredentials: AppError.badRequest("Неправильне ім'я користувача або пароль!", { code: 103 }), //
  expired: AppError.badRequest('Закінчився термін дії токена для авторизації', { code: 107 }),
  invalidToken: AppError.badRequest('Невірний токен для авторизації', { code: 106 }),
  invalidAuthorizationHeader: AppError.badRequest('Невірний заголовок авторизації', { code: 105 }),
  banned: AppError.forbidden('Вашого користувача заблоковано', { code: 105 }),

  // passwordsMismatch: AppError.badRequest('Паролі не співпадають', {code: 104}),
  // missedSignupData: AppError.badRequest('Деякі з введений даних не співпадають', {code: 104}),
  // missedPassword: AppError.badRequest('Не встановлений пароль', {code: 104}),
  // requiredInviteCode: AppError.badRequest('Потрібен запрошувальний код', {code: 108})
};

module.exports = AuthErrors;
