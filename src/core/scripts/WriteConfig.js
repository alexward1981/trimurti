var chalk = require('chalk');
var fs = require('fs');

var exports = module.exports = {}

// First check to see if a trimurti.json exists. If so then continue, otherwise return an error
  exports.generateConfigStream = function () {
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
            var streamProps = routeData.properties;
            // 3. Loop through the newEntry object and append some extra properties to each item in the route.
            for (var i in streamProps) {
              streamProps[i].required = true;
              streamProps[i].editable = false;
              streamProps[i].readable = true;
              streamProps[i].default = null;
              streamProps[i].validation = null;
            }
            var stream = {
              'name': routeName,
              'data' : streamProps
            }
            exports.writeFile(stream);
          })
        })
      });

  }

  exports.writeFile = function (stream) {
    // takes the values of all route configs and writes them to a 'routes' object in trimurti.json
    console.log(stream.data);
    return console.log(chalk.green('✔ Processing of '+stream.name+' complete'));
  }
