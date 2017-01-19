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
    User.auth(req.body.email, req.body.pwd)
      .then(user => {
        const payload = {_id: user._id, email: user.email, role: user.role};

        AuthToken.set(res, payload, config.jwt.auth.secret);

        res.send({email: user.email});
      })
      .catch(error => next(error));
  },
};

module.exports = AuthController;
