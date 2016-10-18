import chalk from 'chalk';
import fs from 'fs';

export default class WriteConfig {
// First check to see if a vulcan.json exists. If so then continue, otherwise return an error
  writeFile () {
    if(fs.existsSync('./vulcan.json')) {
      console.log(__dirname);
    } else {
      console.log(chalk.red('Error:'),chalk.white('No vulcan.json file detected. Please run `vulcan` first'))
    }
  }

  init() {
    this.writeFile()
  }

}
