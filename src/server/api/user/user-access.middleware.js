

// const Promise = require('bluebird');
// const AppError = require('../../libs/app-error/index');
const AuthErrors = require('../../api/auth/auth.errors');
const User = require('../../models/user.model');

const UserAccess = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  approved: (req, res, next) => {
    if (req.user === undefined) return next();

    User.getByLogin(req.user.login)
      .then((user) => {
        // if (!user) return next(AuthErrors.notFound);
        if (user.banned) return next(AuthErrors.banned);

        next();
      });
  },

};

module.exports = UserAccess;
