'use strict';

const AppError = require('../../libs/app-error');
const Joi = require('joi');

const keys = {
  login: Joi.string().trim().regex(/^[a-z]+_[a-z]{2}$/).min(4).max(33).required(),
  // login_auth: Joi.string().trim().min(1).max(100).required(),
  fname: Joi.string().trim().min(1).max(50).required(),
  sname: Joi.string().trim().min(1).max(50).required(),
  // tname: Joi.string().trim().min(0).max(50).required(),
  group: Joi.string().trim().min(1).max(50).required(),
  password_reg_required: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z\d]*$/).min(8).max(20).required(),
  password_reg_optional: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z\d]*$/).min(8).max(20).optional(),
  boolean: Joi.boolean().required(),
};

const UserValidate = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  create: (req, res, next) => {
    const schema = Joi.object().keys({
      login: keys.login,
      fname: keys.fname,
      sname: keys.sname,
      // tname: keys.tname,
      pwd: keys.password_reg_required,
      cpwd: keys.password_reg_required
    }, { convert: true });

    Joi.validate(req.body, schema, (err, value) => {
      if (err) return next(new AppError.badRequest(err.message));
      
      if (value.pwd !== value.cpwd) return next(new AppError.badRequest('Паролі не співпадають'));
      
      next();
    });
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  update: (req, res, next) => {
    const schema = Joi.object().keys({
      login: keys.login,
      fname: keys.fname,
      sname: keys.sname,
      // tname: keys.tname,
      updatePassword: keys.boolean,
      pwd: keys.password_reg_optional,
      cpwd: keys.password_reg_optional
    }, { convert: true });

    Joi.validate(req.body, schema, (err, value) => {
      if (err) return next(new AppError.badRequest(err.message));

      if (value.updatePassword && value.pwd !== value.cpwd) return next(new AppError.badRequest('Паролі не співпадають'));

      next();
    });
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  updateGroup: (req, res, next) => {
    const schema = Joi.object().keys({
      login: keys.login,
      group: keys.group
    }, { convert: true });

    Joi.validate(req.body, schema, (err, value) => {
      if (err) return next(new AppError.badRequest(err.message));

      next();
    });
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  remove: (req, res, next) => {
    const schema = Joi.object().keys({ login: keys.login }, { convert: true });

    Joi.validate(req.body, schema, (err, value) => {
      if (err) return next(new AppError.badRequest(err.message));

      next();
    });
  },

};

module.exports = UserValidate;
