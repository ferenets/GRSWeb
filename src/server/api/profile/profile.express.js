

const router = require('express').Router();
const ProfileController = require('./profile.controller.js');
// const ProfileValidate = require('./profile.validate.js');
const AuthAccess = require('../auth/auth-access.middleware');
// const wrap = require('../../utils/express-utils').wrap;

// const ExpressUtils = require('../../utils/express-utils');
// ExpressUtils.validate.wrapAll(ProfileValidate);

/**
 * @api {get} /api/v1/profile FetchProfile
 * @apiName FetchProfile
 * @apiGroup Profile
 * @apiVersion 0.1.0
 */
router.get('/',
  AuthAccess.cookie.logged,
  ProfileController.fetchProfile,
);

module.exports = router;
