var chalk = require('chalk');
var fs = require('fs');

var exports = module.exports = {}

// First check to see if a trimurti.json exists. If so then continue, otherwise return an error
  exports.generateConfigStream = function () {
      var stream = []
      // 1. Go through each of the routes that are in the /trimurti/core/routes directory
      fs.readdir('./trimurti/core/routes', function( err, files ) {
        if( err ) {
          console.error( 'Could not list the directory.', err );
          process.exit( 1 );
        }
        files.forEach( function(file, index) {
          fs.readFile('./trimurti/core/routes/'+file, 'utf8' , function (err2, data){
            // 2. parse the json and store each route as an object
            if(err2) {
              return console.log(err2);
            }
            var obj = JSON.parse(data);
            var routeName = file.replace('.json', '');
            var routeData = obj.properties.data.items;
            var streamProps = routeData.properties;
            console.log(chalk.yellow('Processing', routeName, 'route'));
            // 3. Loop through the newEntry object and append some extra properties to each item in the route.
            for (var i in streamProps) {
              streamProps[i].required = true;
              streamProps[i].editable = false;
              streamProps[i].readable = true;
              streamProps[i].default = null;
              streamProps[i].validation = null;
            }
            //4. Write the output to the stream and pass it to writeFile()

            stream.push(
              {
                'name': routeName,
                'data' : streamProps
              }
            )
          })
        });
        console.log(chalk.blue('Compiling json from routes, this will take a few moments...'));
        // TODO: Refactor! The 5 second timeout isn't ideal but it fixes the issue for now.
        setTimeout(
          function() {
            console.log(chalk.green('✔ Processing complete.'));
            exports.writeFile(stream);
          }, 5000
        );
      });

  }

  exports.makeFile = function (answers) {
    var appName = answers.Name;
    var apiRoot = answers.API;
    var jsonData = {
      appName: appName,
      apiRoot: apiRoot
    }
    fs.writeFile('./trimurti.json', JSON.stringify(jsonData, null, 4), 'utf-8', function (err) {
      if (err) { return console.log(err); }
      console.log(chalk.green('✔ trimurti.json file written to project root'))
    });
  }

  exports.writeFile = function (stream) {
    // takes the values of all route configs and writes them to a 'routes' object in trimurti.json
    // 1. Open the trimurti.json file created in makeFile()
    fs.readFile('./trimurti.json', 'utf8' , function (err, data){
      // 2. parse the json and store each route as an object
      if(err) {
        return console.log(err);
      }
      var obj = JSON.parse(data);
      console.log(chalk.blue('writing results to trimurti.json'));
      // 3. Take the stream object, place it in a property called 'routes' and combine it with the object from step 3 to create a 'newStream' object
      var newStream = obj;
      newStream.routes = stream;


      // 4. Write the newStream object to trimurti.json, overwriting the exisitng file's contents
      fs.writeFile('./trimurti.json', JSON.stringify(newStream, null, 4), 'utf-8', function (err2) {
        if (err2) { return console.log(err2); }
        return console.log(chalk.green('✔ Operation complete. Trimurti is now ready to use.'));
      });
    });
  }
