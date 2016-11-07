var chalk = require('chalk');
var fs = require('fs');

var exports = module.exports = {}

// First check to see if a trimurti.json exists. If so then continue, otherwise return an error
  exports.generateConfigStream = function () {
      var stream = {}
      var extras = {
        'required' : false,
        'editable' : true,
        'readable' : true,
        'default' : null,
        'validation' : null
      }
      // 1. Go through each of the routes that are in the /trimurti/core/routes directory
      fs.readdir('./trimurti/core/routes', function( err, files ) {
        if( err ) {
          console.error( 'Could not list the directory.', err );
          process.exit( 1 );
        }

        files.forEach( function( file ) {
          fs.readFile('./trimurti/core/routes/'+file, 'utf8' , function (err2, data){
            // 2. parse the json and store each route as an object
            if(err2) {
              return console.log(err);
            }
            var obj = JSON.parse(data);
            var routeName = file.replace('.json', '');
            var routeData = obj.properties.data.items;
            var newEntry = {
              'name': routeName,
              'data' : routeData
            }
            console.log(newEntry)
            // 3. Loop through the newEntry object and append the extras to each item in the route.
            // 4. Store each item as a child object of the routes object in the 'stream' object
            // 5. for each object append the 'extras' object
            // 6. Return the stream object
          })
        })
      });

  }

  exports.writeFile = function () {
    // takes the values of all route configs and writes them to a 'routes' object in trimurti.json
    return console.log(chalk.green('✔ Processing complete'));
  }
