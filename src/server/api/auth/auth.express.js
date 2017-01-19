'use strict';

const router = require('express').Router();
// const AuthAccess = require('./auth-access.middleware');
const AuthValidate = require('./auth.validate');
const AuthController = require('./auth.controller.js');

/**
 * @api {post} /api/v1/auth/login Login
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion 0.1.0
 */
router.post('/login',
  AuthValidate.login,
  AuthController.login
);

module.exports = router;
