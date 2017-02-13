'use strict';

const AppError = require('../../libs/app-error');
const Joi = require('joi');

const keys = {
  name: Joi.string().trim().min(1).max(50).required(),
  right: Joi.object({
    col: Joi.string().min(1).max(1000).required(),
    val: Joi.string().min(1).max(1000).required(),
  }).required(),
  boolean: Joi.boolean().required(),
};

const GroupValidate = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  create: (req, res, next) => {
    const schema = Joi.object().keys({ name: keys.name }, { convert: true });

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
  addRight: (req, res, next) => {
    const schema = Joi.object().keys({
      name: keys.name,
      right: keys.right,
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
  removeRight: (req, res, next) => {
    const schema = Joi.object().keys({
      name: keys.name,
      right: keys.right,
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
    const schema = Joi.object().keys({ name: keys.name }, { convert: true });

    Joi.validate(req.body, schema, (err, value) => {
      if (err) return next(new AppError.badRequest(err.message));

      next();
    });
  },

};

module.exports = GroupValidate;
