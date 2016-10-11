import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import del from 'del';

export default class StructuralGenerator {
  generateTree(answers) {
    /* Creates the following folder tree
       /vulcan
        -/core
        --/scripts
        --/layouts
        -/themes*
        --/styles
        --/images
        --/scripts

        * This will only be generated if the user
          has chosen to use the default theme
    */

    fs.Stats('./vulcan', () => {
      if(Stats.isDirectory) {
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
            genF(true);
          }
        });
      } else {
        genF(false);
      }

    });

    // The actual folder structure generator
    let genF = (deltree) => {
      if(deltree) {
        del(['./vulcan/**/*']).then(paths => {
          console.log('Deleted files and folders:\n', paths.join('\n'));
        });
      }

      fs.mkdir('./vulcan', (err) => {
        if (err) throw err;
      });

      fs.mkdir('./vulcan/core', (err) => {
        if (err) throw err;
      });

      fs.mkdir('./vulcan/core/scripts', (err) => {
        if (err) throw err;
      });

      fs.mkdir('./vulcan/core/layouts', (err) => {
        if (err) throw err;
      });
      if(answers.Styles) {
        fs.mkdir('./vulcan/themes', (err) => {
          if (err) throw err;
        });

        fs.mkdir('./vulcan/themes/styles', (err) => {
          if (err) throw err;
        });
        fs.mkdir('./vulcan/themes/images', (err) => {
          if (err) throw err;
        });
        fs.mkdir('./vulcan/themes/scripts', (err) => {
          if (err) throw err;
        });
      } else {
        console.log(chalk.red('Warning:'), chalk.yellow('As you have chosen not to use the default theme, you will be presented with a style-less plain HTML product. Expect it to look awful.'));
      }
    }

  }

  init(answers) {
    this.generateTree(answers);
  }
}
