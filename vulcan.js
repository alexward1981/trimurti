#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _WriteConfig = require('./dist/scripts/WriteConfig');

var _WriteConfig2 = _interopRequireDefault(_WriteConfig);

var _VulcanStart = require('./dist/scripts/VulcanStart');

var _VulcanStart2 = _interopRequireDefault(_VulcanStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_yargs.argv.writeconfig || _yargs.argv.w) {
  var wc = new _WriteConfig2.default();
  wc.init();
} else {
  // Add an if to this as well. It should check to see if the setup has already happened
  var vs = new _VulcanStart2.default();
  vs.init();
}