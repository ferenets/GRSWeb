

const AppError = require('../../libs/app-error');
const Joi = require('joi');

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
        login: Joi.string().trim().min(1).max(100).required(),
        pwd: Joi.string().min(1).max(100).required(),
      },
      { convert: true },
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
