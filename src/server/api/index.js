'use strict';

const router = require('express').Router();

router.use('/auth', require('./auth/auth.express'));
router.use('/data', require('./data/data.express'));
router.use('/profile', require('./profile/profile.express'));
router.use('/user', require('./user/user.express'));

module.exports = router;
