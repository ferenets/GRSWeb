'use strict';

// const Promise = require('bluebird');
const AppError = require('../../libs/app-error/index');
const User = require('../../models/user.model');

const UserAccess = {

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  approved: (req, res, next) => {
    if (req.user === undefined) return next();
    
    User.getById(req.user._id)
      .then(user => {
        // if (!user.emailVerified) return (next(AppError.forbidden('Email not confirmed')));
        if (user.banned) return next(AppError.forbidden('You are banned'));
        
        next();
      })
  },
  
};

module.exports = UserAccess;
