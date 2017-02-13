'use strict';

// const Promise = require('bluebird');
const AppError = require('../libs/app-error');
const ObjectId = require('mongodb').ObjectId;
const MDB = require('./mdb');
// const config = require('../config');

const Group = MDB.collection({
  name: 'groups',
  indexes: [
    { key: { name: 1 }, unique: true }
  ]
}, {

  /**
   *
   * @param $
   */
  get: ($) => {
    return $
      .find({})
      .sort({ name: 1 })
      .toArray();
  },

  /**
   *
   * @param $
   * @param id
   */
  getById: ($, id) => {
    return $
      .find({ _id: new ObjectId(id) })
      .limit(1)
      .next()
      .then(group => {
        if (!group) throw AppError.notFound(`Групу "${id}" не знайдено`);
        return group;
      });
  },

  /**
   *
   * @param $
   * @param name
   */
  getByName: ($, name) => {
    return $
      .find({ name })
      .limit(1)
      .next()
      .then(group => {
        if (!group) throw AppError.notFound(`Групу "${name}" не знайдено`);
        return group;
      });
  },

  /**
   *
   * @param $
   * @param data
   * @param data.name
   */
  create: ($, data) => {
    const group = {
      name: data.name,
      rights: [], // new group has no any rights
      createdAt: new Date(),
    };

    return $
      .insertOne(group)
      .then(() => group)
      .catch(err => {
        if (err.code === 11000) {
          throw AppError.badRequest(`Группа "${data.name}" вже існує`);
        }

        throw err;
      });
  },

  /**
   *
   * @param $
   * @param params
   */
  addRight: ($, params) => {
    const sQuery = { name: params.name };

    return $
      .find(sQuery)
      .limit(1)
      .next()
      .then(group => {
        if (!group) throw AppError.notFound(`Групу "${params.name}" не знайдено`);

        const uQuery = {
          $push: { rights: params.right }
        };

        return $
          .updateOne(sQuery, uQuery)
          .then(() => group);
      });
  },

  /**
   *
   * @param $
   * @param params
   */
  removeRight: ($, params) => {
    const sQuery = { name: params.name };

    return $
      .find(sQuery)
      .limit(1)
      .next()
      .then(group => {
        if (!group) throw AppError.notFound(`Групу "${params.name}" не знайдено`);

        const uQuery = {
          $pull: { rights: params.right }
        };

        return $
          .updateOne(sQuery, uQuery)
          .then(() => group);
      });
  },

  /**
   *
   * @param $
   * @param params
   */
  removeByName: ($, params) => {
    const sQuery = { name: params.name };

    return $
      .find(sQuery)
      .limit(1)
      .next()
      .then(group => {
        if (!group) throw AppError.notFound(`Групу "${params.name}" не знайдено`);

        return $
          .removeOne(sQuery)
          .then(() => group);
      });
  },
  
});

module.exports = Group;
