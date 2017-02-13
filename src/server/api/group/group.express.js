'use strict';

const router = require('express').Router();
const AuthAccess = require('../auth/auth-access.middleware');
// const UserAccess = require('./user-access.middleware');
const GroupValidate = require('./group.validate');
const GroupController = require('./group.controller.js');

/**
 * @api {get} /api/v1/user Get
 * @apiName Get
 * @apiGroup Group
 * @apiVersion 0.1.0
 */
router.get('/',
  AuthAccess.cookie.admin,
  GroupController.get
);

/**
 * @api {post} /api/v1/user Create
 * @apiName Create
 * @apiGroup Group
 * @apiVersion 0.1.0
 */
router.post('/',
  AuthAccess.cookie.admin,
  GroupValidate.create,
  GroupController.create
);

/**
 * @api {put} /api/v1/user AddRight
 * @apiName AddRight
 * @apiGroup Group
 * @apiVersion 0.1.0
 */
router.put('/add',
  AuthAccess.cookie.admin,
  GroupValidate.addRight,
  GroupController.addRight
);

// /**
//  * @api {put} /api/v1/user SetRight
//  * @apiName SetRight
//  * @apiGroup Group
//  * @apiVersion 0.1.0
//  */
// router.put('/set',
//   AuthAccess.cookie.admin,
//   GroupValidate.setRight,
//   GroupController.setRight
// );

/**
 * @api {put} /api/v1/user UpdateGroup
 * @apiName UpdateGroup
 * @apiGroup Group
 * @apiVersion 0.1.0
 */
router.put('/remove',
  AuthAccess.cookie.admin,
  GroupValidate.removeRight,
  GroupController.removeRight
);

/**
 * @api {delete} /api/v1/user Remove
 * @apiName Remove
 * @apiGroup Group
 * @apiVersion 0.1.0
 */
router.delete('/',
  AuthAccess.cookie.admin,
  GroupValidate.remove,
  GroupController.remove
);

module.exports = router;
