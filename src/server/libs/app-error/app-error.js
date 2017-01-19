'use strict';

/**
 * @apiDefine AppError
 *
 * @apiError (Error 4xx, 5xx) {Number} status http code
 * @apiError (Error 4xx, 5xx) {String} message error message
 * @apiError (Error 4xx, 5xx) {Number} code error code
 * @apiError (Error 4xx, 5xx) {Object} [data] error details
 *
 */

/**
 *
 * @param {number} httpCode
 * @param {string} msg
 * @param {object} [data]
 * @returns {AppError}
 * @constructor
 */
function AppError(msg, httpCode, data) {
  this.httpCode = httpCode || 400;
  this.message = msg || 'Bad Request';
  this.code = data ? data.code : null;
  this.json = {
    status: httpCode,
    code: data ? data.code : 0,
    message: this.message,
    data: data
  };
}

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;


AppError.badRequest = function (msg, data) {
  return new AppError(msg || 'Bad Request', 400, data);
};


AppError.unauthorized = function (msg, data) {
  return new AppError(msg || 'Unauthorized', 401, data);
};


AppError.forbidden = function (msg, data) {
  if (typeof msg === 'object') {
    return new AppError('Forbidden', 403, msg);
  } else {
    return new AppError(msg || 'Forbidden', 403, data);
  }

};


AppError.notFound = function (msg, data) {
  return new AppError(msg || 'Not Found', 404, data);
};


AppError.internalServerError = function (msg, data) {
  if (typeof msg === 'object') {
    return new AppError('Internal Server Error', 500, msg);
  } else {
    return new AppError(msg || 'Internal Server Error', 500, data);
  }
};


AppError.notImplemented = function (msg, data) {
  return new AppError(msg || 'Not Implemented', 501, data);
};


module.exports = AppError;
module.exports.e = AppError;
