#!/usr/bin/env node
import { argv } from 'yargs';
import WriteConfig from './vulcan/core/scripts/WriteConfig';
import VulcanStart from './vulcan/core/scripts/VulcanStart';

if(argv.writeconfig || argv.w) {
  let wc = new WriteConfig;
  wc.generateConfigStream();
} else {
  // Add an if to this as well. It should check to see if the setup has already happened
  let vs = new VulcanStart;
  vs.init();
}
