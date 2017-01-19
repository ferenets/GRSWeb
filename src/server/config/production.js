'use strict';

var path = require('path');
var root = path.join(__dirname, '../../');

var staticResources = path.join(root, './client');

// Production specific configuration
// =================================
module.exports = {
  //views: root + '/server/views-dist/',
  root: root,
  static: staticResources,
  host: process.env.HOST || '138.68.83.193',
  baseUrl: 'http://138.68.83.193',

  logger: {
    app: 'app',
    level: 'debug'
  },

  mongo: {
    uri: 'mongodb://localhost:27017/grs-web'
  }
};
