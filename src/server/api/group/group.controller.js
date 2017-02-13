'use strict';

// const Promise = require('bluebird');
const Group = require('../../models/group.model');
// const AppError = require('../../libs/app-error');
// const config = require('../../config');

const GroupController = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  get: (req, res, next) => {
    Group.get()
      .then(groups => res.send({groups}))
      .catch(error => next(error));
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  create: (req, res, next) => {
    Group.create(req.body)
      .then(group => res.send({group}))
      .catch(error => next(error));
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  addRight: (req, res, next) => {
    Group.addRight(req.body)
      .then(group => res.send({group}))
      .catch(error => next(error));
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  removeRight: (req, res, next) => {
    Group.removeRight(req.body)
      .then(group => res.send({group}))
      .catch(error => next(error));
  },

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  remove: (req, res, next) => {
    Group.removeByName(req.body)
      .then(group => res.send({group}))
      .catch(error => next(error));
  },

};

module.exports = GroupController;
