var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var routes = require('./src/core/routes/index');

var app = express();

var port = 3002; // Feel free to change this if you are already using 3002
var theme = 'default' // change this to match your theme directory name

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/trimurti/themes/'+theme+'/views');

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(morgan('dev'));

// Set a static files folder (css, images etc...)
app.use('/static', express.static('trimurti/themes/'+theme));

app.use('/', routes);

app.listen(port);

console.log('Trimurti is running on localhost:'+port);
