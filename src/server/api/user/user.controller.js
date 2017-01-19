'use strict';

// const Promise = require('bluebird');
const User = require('../../models/user.model');
// const AppError = require('../../libs/app-error');
const config = require('../../config');
const _ = require('lodash');

const UserController = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  get: (req, res, next) => {
    User.get()
      .then(users => res.send({users}))
      .catch(error => next(error));
  },
  
};

module.exports = UserController;
