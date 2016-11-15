'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _StructuralGenerator = require('./StructuralGenerator');

var _StructuralGenerator2 = _interopRequireDefault(_StructuralGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VulcanStart = function () {
  function VulcanStart() {
    _classCallCheck(this, VulcanStart);
  }

  _createClass(VulcanStart, [{
    key: 'welcomeMessage',
    value: function welcomeMessage(version) {
      var starString = '*************************************';
      return '\n\n\n' + starString + '\n\n' + '  Welcome to Vulcan (Version ' + version + ')\n\n' + starString + '\n';
    }
  }, {
    key: 'displayIntro',
    value: function displayIntro() {
      return 'Vulcan is a data driven CMS which will allow content editors to easily add updates to your node API.' + '\n\n' + 'Note: At the moment Vulcan is limited to a single feed with simple routes and no parameters e.g. https://url.ext/api/routename \n\n' + 'To get started, follow the instructions below:\n\r';
    }
  }, {
    key: 'askQuestions',
    value: function askQuestions() {
      var questions = [{
        type: 'input',
        name: 'Name',
        message: 'What do you want to name your new Vulcan app?',
        default: 'MYAPP',
        validate: function validate(value) {
          var pass = value.match(/^[a-zA-Z0-9_]+$/);
          if (pass) {
            return true;
          }
          return 'Please do not use spaces or special characters (only A-Z a-z 0-9 and \'_\')';
        }
      }, {
        type: 'input',
        name: 'API',
        message: 'What is the full URL of your API entrypoint (without a trailing /)?:',
        default: 'http://localhost:8080/api',
        validate: function validate(value) {
          var pass = value.match(/^(https?):\/\/([A-Z\d\.-]{2,})\.?([A-Z]{2,})?(:\d{2,5})?(\/)?([A-Z\d\.\-_?#&%=]{1,})?$/i);
          if (pass) {
            return true;
          }
          return 'That doesn\'t look like a valid url. Don\'t forget the \'http(s)!\'';
        }
      }, {
        type: 'input',
        name: 'Routes',
        message: 'Please list your API routes (not including your entrypoint) as a comma seperated list? e.g. people, places, sausage-types',
        filter: function filter(val) {
          return val.toLowerCase().replace(/ /g, '');
        }
      }, {
        type: 'confirm',
        name: 'Styles',
        message: 'Do you want to import the default editor theme?:',
        default: true
      }];

      _inquirer2.default.prompt(questions).then(function (answers) {
        console.log('Brill!, you are creating a new Vulcan app named', _chalk2.default.cyan(answers.Name));
        var stylesResponse = answers.Styles ? 'do' : 'don\'t';
        console.log('You have said that you', _chalk2.default.cyan(stylesResponse), 'want to use the default editor theme');
        console.log('Vulcan will now build your editor from', _chalk2.default.cyan(answers.API), 'using the following routes:');
        if (answers.Routes) {
          var routes = answers.Routes.split(',');
          for (var i = 0; i < routes.length; i++) {
            console.log(_chalk2.default.cyan(answers.API + '/' + routes[i] + '/'));
          }
        } else {
          console.log(_chalk2.default.cyan(answers.API + '/'));
        }

        confirmer(answers);
      });

      var confirm = [{
        type: 'confirm',
        name: 'Happy',
        message: 'Are you happy with your answers?:',
        default: true
      }];

      var confirmer = function confirmer(answers) {
        _inquirer2.default.prompt(confirm).then(function (confirmations) {
          if (confirmations.Happy) {
            console.log(_chalk2.default.green('✔ Glad to hear it! Vulcan is now generating your editor'));
            var sg = new _StructuralGenerator2.default();
            sg.init(answers);
          } else {
            console.log(_chalk2.default.red('✘ Aww! I guess you need to start again, I\'m afraid'));
          }
        });
      };
    }

    // Execute all methods

  }, {
    key: 'init',
    value: function init() {
      var message = this.welcomeMessage(process.env.npm_package_version);
      var intro = this.displayIntro();
      console.log(_chalk2.default.blue(message) + '\n' + _chalk2.default.yellow(intro));
      this.askQuestions();
    }
  }]);

  return VulcanStart;
}();

exports.default = VulcanStart;