#!/usr/bin/env node
import { argv } from 'yargs';
import WriteConfig from './dist/scripts/WriteConfig';
import VulcanStart from './dist/scripts/VulcanStart';

if(argv.writeconfig || argv.w) {
  let wc = new WriteConfig;
  wc.init();
} else {
  // Add an if to this as well. It should check to see if the setup has already happened
  let vs = new VulcanStart;
  vs.init();
}
