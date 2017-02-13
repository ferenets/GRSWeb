'use strict';

const AppError = require('../libs/app-error');
const AuthErrors = require('../api/auth/auth.errors');
const PasswordUtils = require('./utils/password.utils');
const ObjectId = require('mongodb').ObjectId;
// const Promise = require('bluebird');
const MDB = require('./mdb');
// const config = require('../config');

const User = MDB.collection({
  name: 'users',
  indexes: [
    { key: { login: 1 }, unique: true }
  ]
}, {

  /**
   *
   * @param $
   */
  get: ($) => {
    return $
      .find({}, { password: 0 })
      .sort({ createdAt: 1 })
      .toArray();
  },

  /**
   *
   * @param $
   * @param id
   */
  getById: ($, id) => {
    return $
      .find({ _id: new ObjectId(id) }, { password: 0 })
      .limit(1)
      .next()
      .then(user => {
        if (!user) throw AppError.notFound(`Користувач "${id}" не знайдений`);
        return user;
      });
  },

  /**
   *
   * @param $
   * @param login
   */
  getByLogin: ($, login) => {
    return $
      .find({ login }, { password: 0 })
      .limit(1)
      .next()
      .then(user => {
        if (!user) throw AppError.notFound(`Користувач "${login}" не знайдений`);
        return user;
      });
  },

  /**
   *
   * @param $
   * @param data
   * @param data.login
   * @param data.fname
   * @param data.sname
   * @param data.pwd
   * @param data.cpwd
   */
  create: ($, data) => {
    return PasswordUtils
      .hash(data.pwd)
      .then(hash => {
        const date = new Date();
        const user = {
          login: data.login,
          password: hash,
          fname: data.fname,
          sname: data.sname,
          role: null,
          banned: false,
          createdAt: date,
          updatedAt: date,
        };

        return $
          .insertOne(user)
          .then(() => {
            delete user.password;
            return user;
          });
      })
      .catch(err => {
        if (err.code === 11000) {
          throw AuthErrors.userExist;
        }

        throw err;
      });
  },

  /**
   *
   * @param $
   * @param params
   */
  update: ($, params) => {
    const sQuery = { login: params.login };

    return $
      .find(sQuery, { password: 0 })
      .limit(1)
      .next()
      .then(user => {
        if (!user) throw AppError.notFound(`Користувач "${params.login}" не знайдений`);
        
        const uQuery = {
          $set: {
            fname: params.fname,
            sname: params.sname,
            updatedAt: new Date()
          }
        };

        return $
          .findOneAndUpdate(sQuery, uQuery, { projection: { password: 0 }, returnOriginal: false })
          .then(r => r.value);
      });
  },

  /**
   *
   * @param $
   * @param params
   */
  updateWithPassword: ($, params) => {
    return PasswordUtils
      .hash(params.pwd)
      .then(hash => {
        const sQuery = { login: params.login };

        return $
          .find(sQuery, { password: 0 })
          .limit(1)
          .next()
          .then(user => {
            if (!user) throw AppError.notFound(`Користувач "${params.login}" не знайдений`);

            const uQuery = {
              $set: {
                fname: params.fname,
                sname: params.sname,
                password: hash,
                updatedAt: new Date()
              }
            };

            return $
              .findOneAndUpdate(sQuery, uQuery, { projection: { password: 0 }, returnOriginal: false })
              .then(r => r.value);
          });
      });
  },

  /**
   *
   * @param $
   * @param params
   */
  removeByLogin: ($, params) => {
    const sQuery = { login: params.login };

    return $
      .find(sQuery)
      .limit(1)
      .next()
      .then(user => {
        if (!user) throw AppError.notFound(`Користувач "${params.login}" не знайдений`);
        if (user.role === 'admin') throw AppError.forbidden(`Неможливо видалити користувача-адміністратора`);

        return $
          .removeOne(sQuery)
          .then(() => user);
      });
  },

  /**
   *
   * @param $
   * @param login
   * @param password
   */
  auth: ($, login, password) => {
    
    // PasswordUtils.hash(password).then(data => console.log(data));

    return $
      .find({ login })
      .limit(1)
      .next()
      .then(user => {
        if (!user) throw AuthErrors.invalidCredentials;

        return PasswordUtils
          .isHashEqual(password, user.password)
          .then(() => {
            delete user.password;
            return user;
          });
      });
  },
  
});

module.exports = User;
