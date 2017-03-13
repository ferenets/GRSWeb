

const express = require('express');
const http = require('http');
// const https = require('https');
const config = require('./../../config');
const app = express();
const server = http.createServer(app);
const { logger } = require('../../utils/logger');


require('./express-config.js')(app, config);
require('./routes')(app, config);


const param = [config.port];
if (config.host !== 'null' && config.host !== '') param.push(config.host);

param.push(() => {
  const host = server.address().address;
  const port = server.address().port;
  logger.info(`Express server listening on ${host}:${port}, in ${config.env} mode`);
});

server.listen(...param);

// Expose app
module.exports = app;

