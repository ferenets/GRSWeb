'use strict';

// const AppError = require('../libs/app-error');
const AuthErrors = require('../api/auth/auth.errors');
const PasswordUtils = require('./utils/password.utils');
const ObjectId = require('mongodb').ObjectId;
// const Promise = require('bluebird');
const MDB = require('./mdb');
const config = require('../config');

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
        if (!user) throw AuthErrors.notFound;
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
   * @param data.role
   * @param data.pwd
   * @param data.cpwd
   */
  create: ($, data) => {
    return PasswordUtils
      .hash(data.pwd)
      .then(hash => {
        let user = {
          _id: data._id || new ObjectId(),
          login: data.login,
          password: hash,
          fname: data.fname,
          sname: data.sname,
          role: 'user',
          banned: false,
          createdAt: new Date(),
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
