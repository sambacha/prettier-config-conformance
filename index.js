// @file prettier-config-conformance
// @license Apache-2.0
'use strict';

module.exports = {
  extends: [
    require.resolve('./core'),
    require.resolve('./plugins/react'),
    require.resolve('prettier.config.js'),
  ],
};
