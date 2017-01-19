'use strict';

const AppError = require('../libs/app-error');
const PasswordUtils = require('./utils/password.utils');
const ObjectId = require('mongodb').ObjectId;
// const Promise = require('bluebird');
const MDB = require('./mdb');
const config = require('../config');

const User = MDB.collection({
  name: 'users',
  indexes: [
    { key: { email: 1 }, unique: true }
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
        if (!user) throw AppError.notFound('User Not Found');
        return user;
      });
  },

  /**
   *
   * @param $
   * @param data
   * @param data.email
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
          email: data.email.toLowerCase(),
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
          throw AppError.badRequest(`Email '${data.email}' already used`);
        }

        throw err;
      });
  },

  /**
   *
   * @param $
   * @param email
   * @param password
   */
  auth: ($, email, password) => {
    PasswordUtils.hash(password).then(data => console.log(data));
    return $
      .find({ email: email })
      .limit(1)
      .next()
      .then(user => {
        if (!user) throw AppError.badRequest('Invalid email or password');

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
