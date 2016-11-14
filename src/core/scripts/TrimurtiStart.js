var chalk = require('chalk');
var inquirer = require('inquirer');
var CreateSchemas = require('./CreateSchemas');
var WriteConfig = require('./WriteConfig');

var exports = module.exports = {}

  exports.welcomeMessage = function(version) {
    var starString = '*************************************';
    return '\n\n\n'+starString+'\n\n'+'  Welcome to Trimurti (Version '+version+')\n\n'+starString+'\n';
  };

  exports.displayIntro = function() {
    return (
      'Trimurti is a data driven CMS which will allow content editors to easily add updates to your node API.'+'\n\n'+'Note: At the moment Trimurti is limited to a single feed with simple routes and no parameters e.g. https://url.ext/api/routename \n\n'+'To get started, follow the instructions below:\n\r'
    )
  }

  exports.askQuestions = function() {
    var questions = [
      {
        type: 'input',
        name: 'Name',
        message: 'What do you want to name your new Trimurti app?',
        default: 'MYAPP',
        validate: function (value) {
          var pass = value.match(/^[a-zA-Z0-9_]+$/);
          if (pass) { return true; }
          return 'Please do not use spaces or special characters (only A-Z a-z 0-9 and \'_\')';
        }
      },
      {
        type: 'input',
        name: 'API',
        message: 'What is the full URL of your API entrypoint (without a trailing /)?:',
        default: 'http://localhost:8080/api',
        validate: function (value) {
          var pass = value.match(/^(https?):\/\/([A-Z\d\.-]{2,})\.?([A-Z]{2,})?(:\d{2,5})?(\/)?([A-Z\d\.\-_?#&%=]{1,})?$/i);
          if (pass) { return true; }
          return 'That doesn\'t look like a valid url. Don\'t forget the \'http(s)!\'';
        }
      },
      {
        type: 'input',
        name: 'Routes',
        message: 'Please list your API routes (not including your entrypoint) as a comma seperated list? e.g. people, places, sausage-types',
        filter: function (val) {
          return val.toLowerCase().replace(/ /g, '');
        }
      }
    ]

    inquirer.prompt(questions)
    .then(function (answers) {
      console.log('Brill!, you are creating a new Trimurti app named', chalk.cyan(answers.Name));
      console.log('Trimurti will now build your editor from', chalk.cyan(answers.API), 'using the following routes:');
      if (answers.Routes) {
        var routes = answers.Routes.split(',');
        for (var i = 0; i < routes.length; i++) {
          console.log(chalk.cyan(answers.API +'/'+routes[i]+'/'));
        }
      } else {
        console.log(chalk.cyan(answers.API +'/'));
      }

      confirmer(answers);
    });

    var confirm = [
      {
        type: 'confirm',
        name: 'Happy',
        message: 'Are you happy with your answers?:',
        default: true
      }
    ]

    var confirmer = function(answers) {
      inquirer.prompt(confirm)
      .then(function (confirmations) {
        if(confirmations.Happy) {
          console.log(chalk.green('✔ Glad to hear it! Trimurti is now generating your editor'));
          WriteConfig.makeFile(answers);
          CreateSchemas.init(answers);
        } else {
          console.log(chalk.red('✘ Aww! I guess you need to start again, I\'m afraid'));
        }
      });
    }
  }

  // Execute all methods
  exports.init = function() {
    var message = this.welcomeMessage(process.env.npm_package_version);
    var intro = this.displayIntro();
    console.log(chalk.blue(message)+'\n'+chalk.yellow(intro));
    this.askQuestions();
  }
