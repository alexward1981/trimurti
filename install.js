// This file installs Trimurti and creates all the required files and folders
var fs = require('fs');
var chalk = require('chalk');
var inquirer = require('inquirer');
var del = require('del');

/* Creates the following folder tree
   /trimurti
    -/core
    --/scripts
    --/routes
    -/themes
    --/default
    ----/styles
    ----/images
    ----/scripts
    ----/views
*/

//TODO: Create default theme files and copy those over too

(function() {
  // The actual folder structure generator
  var genF = function() {
    console.log(chalk.yellow('Installing Trimurti into your project...'));
    // Generate folders
    fs.existsSync('./trimurti') || fs.mkdirSync('./trimurti');
    fs.existsSync('./trimurti/core') || fs.mkdirSync('./trimurti/core');
    fs.existsSync('./trimurti/core/scripts') || fs.mkdirSync('./trimurti/core/scripts');
    fs.existsSync('./trimurti/core/routes') || fs.mkdirSync('./trimurti/core/routes');
    fs.existsSync('./trimurti/themes') || fs.mkdirSync('./trimurti/themes');
    fs.existsSync('./trimurti/themes/default') || fs.mkdirSync('./trimurti/themes/default');
    fs.existsSync('./trimurti/themes/default/styles') || fs.mkdirSync('./trimurti/themes/default/styles');
    fs.existsSync('./trimurti/themes/default/images') || fs.mkdirSync('./trimurti/themes/default/images');
    fs.existsSync('./trimurti/themes/default/scripts') || fs.mkdirSync('./trimurti/themes/default/scripts');
    fs.existsSync('./trimurti/themes/default/views') || fs.mkdirSync('./trimurti/themes/default/views');

    // Copy trimurti.js to project root.
    fs.createReadStream('./src/core/start/trimurti.js')
      .pipe(fs.createWriteStream('./trimurti.js'));
    // Transpile other js files and copy to trimurti folder.
    var scriptDir = './src/core/scripts/';
    fs.readdir(scriptDir, function( err, files ) {
      if( err ) {
          console.error( 'Could not list the directory.', err );
          process.exit( 1 );
      }

      files.forEach( function( file ) {
        var currentFile = scriptDir+file;
        fs.createReadStream(currentFile)
          .pipe(fs.createWriteStream('./trimurti/core/scripts/'+file));
      })
    });
  }

  // clean existing folder
  var cleantree = function() {
    del('./trimurti/**').then(paths => {
      // Folders found, user chose to delete everything and start again
      console.log('Deleted files and folders:\n'+paths.join('\n'));
      genF();
    });
  }

  var generateTree = function() {
    fs.access('./trimurti', fs.F_OK, function(err) {
      if(!err) {
        console.log(chalk.red('Warning:'), chalk.yellow('A trimurti folder has been detected, if you continue, this will completely overwrite all your current trimurti files.'));
        var confirm = [
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
            cleantree()
          }
        });
      } else {
        genF();
      }
    });
  }

  generateTree();
})();
