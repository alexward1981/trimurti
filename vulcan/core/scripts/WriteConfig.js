'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WriteConfig = function () {
  function WriteConfig() {
    _classCallCheck(this, WriteConfig);
  }

  _createClass(WriteConfig, [{
    key: 'generateConfigStream',

    // First check to see if a vulcan.json exists. If so then continue, otherwise return an error
    value: function generateConfigStream(stream) {
      var extras = {
        'required': false,
        'editable': true,
        'readable': true,
        'default': null,
        'validation': null
      };
      console.log(__dirname);
      // 1. Go through each of the routes that are in the /vulcan/core/routes directory
      _fs2.default.readdir('./vulcan/core/routes', function (err, files) {
        if (err) {
          console.error('Could not list the directory.', err);
          process.exit(1);
        }

        files.forEach(function (file, index) {
          console.log(file);
        });
      });
      // 2. parse the json and store each route as an object in the 'stream' object
      // 3. Look for the properties.data.items object and then loop through it
      // 4. Store each item as a child object of the routes object in the 'stream' object
      // 5. for each object append the 'extras' object
      // 6. Return the stream object
    }
  }, {
    key: 'writeFile',
    value: function writeFile() {
      // takes the values of all route configs and writes them to a 'routes' object in vulcan.json
      return console.log(_chalk2.default.green('✔ Processing complete'));
    }
  }]);

  return WriteConfig;
}();

exports.default = WriteConfig;