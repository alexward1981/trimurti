#!/usr/bin/env node
var argv = require('yargs');
var WriteConfig = require('./trimurti/core/scripts/WriteConfig');
var TrimurtiStart = require('./trimurti/core/scripts/TrimurtiStart');

if(argv.writeconfig || argv.w) {
  WriteConfig.generateConfigStream();
} else {
  // Add an if to this as well. It should check to see if the setup has already happened
  TrimurtiStart.init();
}
