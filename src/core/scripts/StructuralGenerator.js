import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import del from 'del';
import CreateSchemas from './CreateSchemas';

/* Creates the following folder tree
   /trimurti
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
    fs.existsSync('./trimurti') || fs.mkdirSync('./trimurti');
    fs.existsSync('./trimurti/core') || fs.mkdirSync('./trimurti/core');
    fs.existsSync('./trimurti/core/scripts') || fs.mkdirSync('./trimurti/core/scripts');
    fs.existsSync('./trimurti/core/routes') || fs.mkdirSync('./trimurti/core/routes');

    if(this.answers.Styles) {
      fs.existsSync('./trimurti/themes') || fs.mkdirSync('./trimurti/themes');
      fs.existsSync('./trimurti/themes/default') || fs.mkdirSync('./trimurti/themes/default');
      fs.existsSync('./trimurti/themes/default/styles') || fs.mkdirSync('./trimurti/themes/default/styles');
      fs.existsSync('./trimurti/themes/default/images') || fs.mkdirSync('./trimurti/themes/default/images');
      fs.existsSync('./trimurti/themes/default/scripts') || fs.mkdirSync('./trimurti/themes/default/scripts');
      fs.existsSync('./trimurti/themes/default/views') || fs.mkdirSync('./trimurti/themes/default/views');
    } else {
      console.log(chalk.red('Warning:'), chalk.yellow('As you have chosen not to use the default theme, you will be presented with a style-less plain HTML product. Expect it to look awful.'));
    }
    // All folders created, proceed to next step
    let cs = new CreateSchemas;
    cs.init(this.answers);
  }

  // clean existing folder
  cleantree() {
    del('./trimurti/**').then(paths => {
      // Folders found, user chose to delete everything and start again
      console.log('Deleted files and folders:\n'+paths.join('\n'));
      this.genF();
    });
  }

  generateTree() {
    let t = this;
    fs.access('./trimurti', fs.F_OK, function(err) {
      if(!err) {
        console.log(chalk.red('Warning:'), chalk.yellow('A trimurti folder has been detected, if you continue, this will completely overwrite all your current trimurti files.'));
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
