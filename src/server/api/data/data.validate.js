

const AppError = require('../../libs/app-error');
const Joi = require('joi');

const DataValidate = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  getIndicators: (req, res, next) => {
    const schema = Joi.object().keys({ grs_id: Joi.number().integer().min(1).max(999).required() }, { convert: true });

    Joi.validate(req.query, schema, (err, value) => {
      if (err) return next(new AppError.badRequest(err.message));

      // req.body = value;
      req.query.grs_id = req.query.grs_id.toString();
      next();
    });
  },

};

module.exports = DataValidate;
