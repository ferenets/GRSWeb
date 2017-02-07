'use strict';

const router = require('express').Router();
const AuthAccess = require('../auth/auth-access.middleware');
// const UserAccess = require('./user-access.middleware');
// const UserValidate = require('./user.validate');
const DataController = require('./data.controller.js');
const DataValidate = require('./data.validate.js');

/**
 * @api {get} /api/v1/data/points GetPointsData
 * @apiName GetPointsData
 * @apiGroup Data
 * @apiVersion 0.1.0
 */
router.get('/points',
  AuthAccess.cookie.admin, // will be changed to 'logged'
  DataController.getPoints
);

/**
 * @api {get} /api/v1/data/indicators GetIndicatorsData
 * @apiName GetIndicatorsData
 * @apiGroup Data
 * @apiVersion 0.1.0
 */
router.get('/indicators',
  AuthAccess.cookie.admin, // will be changed to 'logged'
  DataValidate.getIndicators,
  DataController.getIndicators
);

module.exports = router;
