'use strict';

const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');
const isProd = process.NODE_ENV === 'production';


module.exports = function RenderHBS(dir) {
  const templateCache = {};
  const render = (filePath, ctx) => {
    if (isProd && templateCache[filePath]) {
      return templateCache[filePath](ctx);
    }

    let html = fs.readFileSync(path.join(dir, filePath), 'utf-8');
    templateCache[filePath] = handlebars.compile(html);

    return templateCache[filePath](ctx);
  };

  return {render, handlebars};
};
