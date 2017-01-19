'use strict';

const {logger} = require('../../utils/logger');
const config = require('../../config');
const express = require('express');

module.exports = function (app) {

  require('../../views')(app);

  //app.use(express.static(config.publicDir)); // public dir

  app.use('/api/v1', require('../../api'));
  app.post('*', (req, res) => res.status(404).end());
  app.use('*', (req, res) => res.status(404).send('Not found (404). Go to <a href="/">main page</a>'));


  app.use(function (error, req, res, next) {
    if (error.httpCode) {
      logger.warn({error, req});
      res.status(error.httpCode).json(error.json);
    } else {
      logger.error({error, req});
      res.status(500).json({message: error.message});
    }
  });
};
