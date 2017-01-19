'use strict';

const AuthToken = require('./auth-token');
const AppError = require('../../libs/app-error');

const AuthAccess = {
  cookie: {
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    anyone: (req, res, next) => {
      AuthToken.extractFromCookie(req, err => {
        if (err) AuthToken.remove(res);
        next();
      });
    },


    /**
     *
     * @param req
     * @param res
     * @param next
     */
    logged: (req, res, next) => {
      AuthToken.extractFromCookie(req, err => {
        if (!err) return next();

        AuthToken.remove(res);
        next(err);
      });
    },


    /**
     *
     * @param req
     * @param res
     * @param next
     */
    admin: (req, res, next) => {
      AuthAccess.cookie.logged(req, res, err => {
        if (err) return next(err);
        if (req.user.role !== 'admin') {
          return next(AppError.forbidden());
        }

        next();
      });
    },
  },


  header: {
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    anyone: (req, res, next) => {
      AuthToken.extractFromHeader(req, err => {
        if (err) AuthToken.remove(res);
        next();
      });
    },


    /**
     *
     * @param req
     * @param res
     * @param next
     */
    logged: (req, res, next) => {
      AuthToken.extractFromHeader(req, err => {
        if (!err) return next();

        AuthToken.remove(res);
        next(err);
      });
    },


    /**
     *
     * @param req
     * @param res
     * @param next
     */
    admin: (req, res, next) => {
      this.logged(req, res, err => {
        if (err) return next(err);
        if (req.user.role !== 'admin') {
          return next(AppError.forbidden());
        }

        next();
      });
    }
  }
};

module.exports = AuthAccess;
