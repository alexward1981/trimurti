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
        default: 'MYAPP'
      },
    ]

    inquirer.prompt(questions)
    .then(function (answers) {
      console.log('Brill!, you have have a new Vulcan app named', chalk.cyan(answers.Name));
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
