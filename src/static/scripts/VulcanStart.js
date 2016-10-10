import chalk from 'chalk';
import inquirer from 'inquirer';

export default class VulcanStart {
  welcomeMessage(version) {
    let starString = "*************************************";
    return "\n\n\n"+starString+"\n\n"+"  Welcome to Vulcan (Version "+version+")\n\n"+starString+"\n";
  };

  displayIntro() {
    return (
      'Vulcan is a data driven CMS which will allow content editors to easily add updates to your node API.'+"\n\n"+"To get started, follow the instructions below:\n\r"
    )
  }

  askQuestions() {
    let questions = [
      {
        type: 'input',
        name: 'Name',
        message: 'What do you want to name your new Vulcan app?',
        default: 'MYAPP',
        validate: function (value) {
          var pass = value.match(/^[a-zA-Z0-9_]+$/);
          if (pass) {
            return true;
          }

          return 'Please do not use spaces or special characters (only A-Z a-z 0-9 and \'_\')';
        }
      },
      {
        type: 'input',
        name: 'API',
        message: 'What is the URL of your API entrypoint (without a trailing /)?:',
        default: 'http://localhost:8080/api'
      },
      {
        type: 'input',
        name: 'Routes',
        message: 'Please list your API routes (not including your entrypoint) as a comma seperated list? e.g. people, places, sausage-types',
        filter: function (val) {
          return val.toLowerCase().replace(/ /g, '');
        }
      },
      {
        type: 'confirm',
        name: 'Styles',
        message: 'Do you want to import the default editor theme?:',
        default: true
      }
    ]

    inquirer.prompt(questions)
    .then(function (answers) {
      console.log('Brill!, you are creating a new Vulcan app named', chalk.cyan(answers.Name));
      let styles_response = (answers.Styles) ? 'do' : 'don\'t';
      console.log('You have said that you', chalk.cyan(styles_response), 'want to use the default editor theme');
      console.log('Vulcan will now build your editor from', chalk.cyan(answers.API), 'using the following routes:');
      let routes = answers.Routes.split(',');
      for (var i = 0; i < routes.length; i++) {
        console.log(chalk.cyan(answers.API +'/'+routes[i]+'/'));
      }
    });
  }

  // Execute all methods
  init() {
    let message = this.welcomeMessage(process.env.npm_package_version);
    let intro = this.displayIntro();
    console.log(chalk.blue(message)+"\n"+chalk.yellow(intro));
    this.askQuestions();
  }
}
