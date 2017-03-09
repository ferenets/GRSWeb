

const AppError = require('../../libs/app-error');

/**
 * @apiDefine GroupErrors
 *
 * @apiError (Error code) 101 Bad request
 *
 */

const GroupErrors = {
  error: AppError.badRequest('Bad request', { code: 101 }),
};

module.exports = GroupErrors;
