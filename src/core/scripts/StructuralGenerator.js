import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import del from 'del';
import CreateSchemas from './CreateSchemas';

/* Creates the following folder tree
   /vulcan
    -/core
    --/scripts
    --/routes
    -/themes*
    --/default
    ----/styles
    ----/images
    ----/scripts
    ----/views

    * This will only be generated if the user
      has chosen to use the default theme
*/

export default class StructuralGenerator {
  // The actual folder structure generator
  genF() {
    fs.existsSync('./vulcan') || fs.mkdirSync('./vulcan');
    fs.existsSync('./vulcan/core') || fs.mkdirSync('./vulcan/core');
    fs.existsSync('./vulcan/core/scripts') || fs.mkdirSync('./vulcan/core/scripts');
    fs.existsSync('./vulcan/core/routes') || fs.mkdirSync('./vulcan/core/routes');

    if(this.answers.Styles) {
      fs.existsSync('./vulcan/themes/default') || fs.mkdirSync('./vulcan/default/themes');
      fs.existsSync('./vulcan/themes/default/styles') || fs.mkdirSync('./vulcan/themes/default/styles');
      fs.existsSync('./vulcan/themes/default/images') || fs.mkdirSync('./vulcan/themes/default/images');
      fs.existsSync('./vulcan/themes/default/scripts') || fs.mkdirSync('./vulcan/themes/default/scripts');
      fs.existsSync('./vulcan/themes/default/views') || fs.mkdirSync('./vulcan/themes/default/views');
    } else {
      console.log(chalk.red('Warning:'), chalk.yellow('As you have chosen not to use the default theme, you will be presented with a style-less plain HTML product. Expect it to look awful.'));
    }
    // All folders created, proceed to next step
    let cs = new CreateSchemas;
    cs.init(this.answers);
  }

  // clean existing folder
  cleantree() {
    del('./vulcan/**').then(paths => {
      // Folders found, user chose to delete everything and start again
      console.log('Deleted files and folders:\n'+paths.join('\n'));
      this.genF();
    });
  }

  generateTree() {
    let t = this;
    fs.access('./vulcan', fs.F_OK, function(err) {
      if(!err) {
        console.log(chalk.red('Warning:'), chalk.yellow('A Vulcan folder has been detected, if you continue, this will completely overwrite all your current Vulcan files.'));
        let confirm = [
          {
            type: 'confirm',
            name: 'Proceed',
            message: 'Do you wish to continue?:',
            default: false
          }
        ]
        inquirer.prompt(confirm)
        .then(function (decision) {
          if(!decision.Proceed) {
            // User said no, don't proceed past this point
            return console.log(chalk.red('Operation aborted by user.'));
          } else {
            t.cleantree()
          }
        });
      } else {
        t.genF();
      }
    });
  }

  init(answers) {
    this.answers = answers;
    this.generateTree();
  }
}
