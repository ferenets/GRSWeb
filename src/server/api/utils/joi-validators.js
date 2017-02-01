'use strict';

const Joi = require('joi');

const keys = {
  id: Joi.string().alphanum().length(24).required(), // MongoDB ObjectId
  // email: Joi.string().trim().email().max(100).required(),
  login: Joi.string().trim().max(40).required(),
  password: Joi.string().min(1).max(100).required(),
};

module.exports = keys;
