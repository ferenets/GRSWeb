'use strict';

const AppError = require('../../libs/app-error');

/**
 * @apiDefine UserErrors
 *
 * @apiError (Error code) 101 Bad request
 *
 */

const UserErrors = {
  error: function () {
    return AppError.badRequest('Bad request', {code: 101});
  }
};

module.exports = UserErrors;
