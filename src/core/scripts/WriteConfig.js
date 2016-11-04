import chalk from 'chalk';
import fs from 'fs';

export default class WriteConfig {
// First check to see if a vulcan.json exists. If so then continue, otherwise return an error
  generateConfigStream (stream) {
      let extras = {
        'required' : false,
        'editable' : true,
        'readable' : true,
        'default' : null,
        'validation' : null
      }
      console.log(__dirname);
      // 1. Go through each of the routes that are in the /vulcan/core/routes directory
      fs.readdir('./vulcan/core/routes', function( err, files ) {
        if( err ) {
            console.error( 'Could not list the directory.', err );
            process.exit( 1 );
        }

        files.forEach( function( file, index ) {
          console.log(file);
        })
      });
      // 2. parse the json and store each route as an object in the 'stream' object
      // 3. Look for the properties.data.items object and then loop through it
      // 4. Store each item as a child object of the routes object in the 'stream' object
      // 5. for each object append the 'extras' object
      // 6. Return the stream object
  }

writeFile () {
  // takes the values of all route configs and writes them to a 'routes' object in vulcan.json
  return console.log(chalk.green('✔ Processing complete'));
}

}
