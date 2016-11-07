#!/usr/bin/env node
import { argv } from 'yargs';
import WriteConfig from './trimurti/core/scripts/WriteConfig';
import TrimurtiStart from './trimurti/core/scripts/TrimurtiStart';

if(argv.writeconfig || argv.w) {
  let wc = new WriteConfig;
  wc.generateConfigStream();
} else {
  // Add an if to this as well. It should check to see if the setup has already happened
  let vs = new TrimurtiStart;
  vs.init();
}
