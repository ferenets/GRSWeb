'use strict';

const assets = require('../webpack-assets').get('bundle.grs-web');
const {render} = require('../../libs/render-hbs')(__dirname);

module.exports = function(req, res) {

  const html = render('grs-web.hbs', {
    styles: assets.styles,
    scripts: assets.scripts
  });

  res.send(html);
};
