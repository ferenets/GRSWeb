'use strict';

const router = require('express').Router();
const AuthAccess = require('../auth/auth-access.middleware');
// const UserAccess = require('./user-access.middleware');
// const UserValidate = require('./user.validate');
const DataController = require('./data.controller.js');

/**
 * @api {post} /api/v1/data/points GetPointsData
 * @apiName GetPointsData
 * @apiGroup User
 * @apiVersion 0.1.0
 */
router.get('/points',
  AuthAccess.cookie.admin,
  DataController.getPoints
);

module.exports = router;
