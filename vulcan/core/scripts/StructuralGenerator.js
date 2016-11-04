'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _CreateSchemas = require('./CreateSchemas');

var _CreateSchemas2 = _interopRequireDefault(_CreateSchemas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var StructuralGenerator = function () {
  function StructuralGenerator() {
    _classCallCheck(this, StructuralGenerator);
  }

  _createClass(StructuralGenerator, [{
    key: 'genF',

    // The actual folder structure generator
    value: function genF() {
      _fs2.default.existsSync('./vulcan') || _fs2.default.mkdirSync('./vulcan');
      _fs2.default.existsSync('./vulcan/core') || _fs2.default.mkdirSync('./vulcan/core');
      _fs2.default.existsSync('./vulcan/core/scripts') || _fs2.default.mkdirSync('./vulcan/core/scripts');
      _fs2.default.existsSync('./vulcan/core/routes') || _fs2.default.mkdirSync('./vulcan/core/routes');

      if (this.answers.Styles) {
        _fs2.default.existsSync('./vulcan/themes') || _fs2.default.mkdirSync('./vulcan/themes');
        _fs2.default.existsSync('./vulcan/themes/default') || _fs2.default.mkdirSync('./vulcan/themes/default');
        _fs2.default.existsSync('./vulcan/themes/default/styles') || _fs2.default.mkdirSync('./vulcan/themes/default/styles');
        _fs2.default.existsSync('./vulcan/themes/default/images') || _fs2.default.mkdirSync('./vulcan/themes/default/images');
        _fs2.default.existsSync('./vulcan/themes/default/scripts') || _fs2.default.mkdirSync('./vulcan/themes/default/scripts');
        _fs2.default.existsSync('./vulcan/themes/default/views') || _fs2.default.mkdirSync('./vulcan/themes/default/views');
      } else {
        console.log(_chalk2.default.red('Warning:'), _chalk2.default.yellow('As you have chosen not to use the default theme, you will be presented with a style-less plain HTML product. Expect it to look awful.'));
      }
      // All folders created, proceed to next step
      var cs = new _CreateSchemas2.default();
      cs.init(this.answers);
    }

    // clean existing folder

  }, {
    key: 'cleantree',
    value: function cleantree() {
      var _this = this;

      (0, _del2.default)('./vulcan/**').then(function (paths) {
        // Folders found, user chose to delete everything and start again
        console.log('Deleted files and folders:\n' + paths.join('\n'));
        _this.genF();
      });
    }
  }, {
    key: 'generateTree',
    value: function generateTree() {
      var t = this;
      _fs2.default.access('./vulcan', _fs2.default.F_OK, function (err) {
        if (!err) {
          console.log(_chalk2.default.red('Warning:'), _chalk2.default.yellow('A Vulcan folder has been detected, if you continue, this will completely overwrite all your current Vulcan files.'));
          var confirm = [{
            type: 'confirm',
            name: 'Proceed',
            message: 'Do you wish to continue?:',
            default: false
          }];
          _inquirer2.default.prompt(confirm).then(function (decision) {
            if (!decision.Proceed) {
              // User said no, don't proceed past this point
              return console.log(_chalk2.default.red('Operation aborted by user.'));
            } else {
              t.cleantree();
            }
          });
        } else {
          t.genF();
        }
      });
    }
  }, {
    key: 'init',
    value: function init(answers) {
      this.answers = answers;
      this.generateTree();
    }
  }]);

  return StructuralGenerator;
}();

exports.default = StructuralGenerator;