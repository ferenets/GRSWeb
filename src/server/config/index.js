'use strict';

var merge = require('merge');
var path = require('path');
var root = path.normalize(__dirname + '/../..');
var env = process.env.NODE_ENV || 'development';

// All configurations will extend these options
// ============================================
var config = {
  root: root,
  views: path.normalize(root + '/server/views/'),
  images: path.normalize(root + '/client/images'),
  upload: path.normalize(root + '/upload'),
  //static: path.normalize(root + '/client/'),
  env: env,
  port: process.env.PORT || '9000',
  host: process.env.HOST || 'localhost',
  
  //================= logger =================
  logger: {
    name: 'app',
    level: 'debug'
  },

  //================= mongodb =================
  mongo: {
    options: {
      server: {
        poolSize: 10
      }
    }
  },

  //================= jwt =================
  jwt: {
    auth: {
      secret: 'xuWReHebrusT5wrA',
      options: {
        algorithm: 'HS256',
        expiresIn: '12h'
      }
    },

    password: {
      secret: 'a7j0PKCtzy7kub9Q',
      options: {
        algorithm: 'HS256',
        expiresIn: '5m'
      }
    },
  },

  //================= nodemailer =================
  // email: {
  //   name: 'GRS WEB',
  //   sender: 'grs.web@gmail.com',
  //   password: 'PYCRVju4eFAVmZ6w'
  // },

  //================= session =================
  sessionStoreTTL: 60 * 60 * 24 * 30, //in seconds
  session: {
    name: 'SID',
    resave: false,
    saveUninitialized: false,
    secret: '9dvc3b-fd134a89-y68v5s',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30 //in ms
    }
  }
};

var envConfig = require('./' + config.env.trim() + '.js') || {};

config = merge.recursive(config, envConfig);

module.exports = config;