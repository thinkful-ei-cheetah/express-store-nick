'use strict';

import { builtinModules } from "module";

const whitelist = ['http://localhost:3000', 'http://my-project.com'];
const options = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

module.exports = options;