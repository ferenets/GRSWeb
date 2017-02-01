'use strict';

// const Promise = require('bluebird');
// const AppError = require('../../libs/app-error');
const User = require('../../models/user.model');
const AuthToken = require('./auth-token');
const config = require('../../config');

const AuthController = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  login: (req, res, next) => {
    User.auth(req.body.login, req.body.pwd)
      .then(user => {
        const payload = {_id: user._id, login: user.login, role: user.role};

        AuthToken.set(res, payload, config.jwt.auth.secret);

        res.send({login: user.login});
      })
      .catch(error => next(error));
  },
};

module.exports = AuthController;
