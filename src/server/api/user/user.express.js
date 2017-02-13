'use strict';

const router = require('express').Router();
const AuthAccess = require('../auth/auth-access.middleware');
// const UserAccess = require('./user-access.middleware');
const UserValidate = require('./user.validate');
const UserController = require('./user.controller.js');

/**
 * @api {get} /api/v1/user Get
 * @apiName Get
 * @apiGroup User
 * @apiVersion 0.1.0
 */
router.get('/',
  AuthAccess.cookie.admin,
  UserController.get
);

/**
 * @api {post} /api/v1/user Create
 * @apiName Create
 * @apiGroup User
 * @apiVersion 0.1.0
 */
router.post('/',
  AuthAccess.cookie.admin,
  UserValidate.create,
  UserController.create
);

/**
 * @api {put} /api/v1/user Update
 * @apiName Update
 * @apiGroup User
 * @apiVersion 0.1.0
 */
router.put('/',
  AuthAccess.cookie.admin,
  UserValidate.update,
  UserController.update
);

// /**
//  * @api {put} /api/v1/user/group UpdateGroup
//  * @apiName UpdateGroup
//  * @apiGroup User
//  * @apiVersion 0.1.0
//  */
// router.put('/group',
//   AuthAccess.cookie.admin,
//   UserValidate.updateGroup,
//   UserController.updateGroup
// );

/**
 * @api {put} /api/v1/user Remove
 * @apiName Remove
 * @apiGroup User
 * @apiVersion 0.1.0
 */
router.delete('/',
  AuthAccess.cookie.admin,
  UserValidate.remove,
  UserController.remove
);

module.exports = router;
