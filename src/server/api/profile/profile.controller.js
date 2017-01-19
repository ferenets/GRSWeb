'use strict';

// const Promise = require('bluebird');
const User = require('../../models/user.model');
// const AuthToken = require('../auth/auth-token');
// const AppError = require('../../libs/app-error');
const config = require('../../config');

const ProfileController = {
  
  /**
   *
   * @param req
   * @param res
   * @param next
   */
  fetchProfile: (req, res, next) => {
    return User.getById(req.user._id)
      .then(user => res.send({user}))
      .catch(error => next(error));
  },
  
};

module.exports = ProfileController;
