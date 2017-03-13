

const GRSWEB = require('./grs-web');

module.exports = function (app) {
  app.get('/', GRSWEB);
  app.get('/login', GRSWEB);
  app.get('/dashboard', GRSWEB);
  app.get('/dashboard/users', GRSWEB);
  // app.get('/dashboard/groups', GRSWEB);
  // app.get('/dashboard/group/:id', GRSWEB);
};
