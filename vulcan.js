#!/usr/bin/env node
'use strict';

var _VulcanStart = require('./dist/static/scripts/VulcanStart');

var _VulcanStart2 = _interopRequireDefault(_VulcanStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vs = new _VulcanStart2.default();
vs.init();