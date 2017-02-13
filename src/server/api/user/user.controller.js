'use strict';

// const Promise = require('bluebird');
const User = require('../../models/user.model');
// const AppError = require('../../libs/app-error');
const config = require('../../config');

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

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  create: (req, res, next) => {
    User.create(req.body)
      .then(user => res.send({user}))
      .catch(error => next(error));
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  update: (req, res, next) => {
    if (req.body.updatePassword) {
      User.updateWithPassword(req.body)
        .then(user => res.send({user}))
        .catch(error => next(error));
    } else {
      User.update(req.body)
        .then(user => res.send({user}))
        .catch(error => next(error));
    }
  },

  // /**
  //  *
  //  * @param req
  //  * @param res
  //  * @param next
  //  */
  // updateGroup: (req, res, next) => {
  //   User.updateGroup(req.body)
  //     .then(user => res.send({user}))
  //     .catch(error => next(error));
  // },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  remove: (req, res, next) => {
    User.removeByLogin(req.body)
      .then(user => res.send({user}))
      .catch(error => next(error));
  },

};

module.exports = UserController;
