#!/usr/bin/env node
'use strict';

var _CreateSchemas = require('./dist/static/scripts/CreateSchemas');

var _CreateSchemas2 = _interopRequireDefault(_CreateSchemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = new _CreateSchemas2.default();

// import VulcanStart from './dist/static/scripts/VulcanStart';
// let vs = new VulcanStart;
// vs.init();

cs.init();