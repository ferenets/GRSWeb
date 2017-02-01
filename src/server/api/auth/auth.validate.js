'use strict';

const AppError = require('../../libs/app-error');
const Joi = require('joi');
const keys = require('../utils/joi-validators');

const AuthValidate = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  login: (req, res, next) => {
    const schema = Joi.object().keys(
      {
        login: keys.login,
        pwd: keys.password
      },
      { convert: true }
    );

    Joi.validate(req.body, schema, (err, value) => {
      if (err) return next(new AppError.badRequest(err.message));

      // value.login = value.login.toLowerCase();
      req.body = value;
      next();
    });
  },
  
};

module.exports = AuthValidate;
