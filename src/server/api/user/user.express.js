'use strict';

const router = require('express').Router();
const AuthAccess = require('../auth/auth-access.middleware');
// const UserAccess = require('./user-access.middleware');
// const UserValidate = require('./user.validate');
const UserController = require('./user.controller.js');

/**
 * @api {post} /api/v1/user Get
 * @apiName Get
 * @apiGroup User
 * @apiVersion 0.1.0
 */
router.get('/',
  AuthAccess.cookie.admin,
  UserController.get
);

module.exports = router;
