// SETUP/////////////////////////////////////////

// DEPENDENCIES
var express       = require('express'),
    logger        = require('morgan'),
    mongoose      = require('mongoose'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    md5           = require('md5');

// EXPRESS
var app = express();

// PORT & LISTENER
var port = process.env.PORT || 5000;
app.listen(port);
console.log('Silence please...' + '\n' + 'Curtains up...' + '\n' + 'Server started on: ' + port);

// MIDDLEWARE
app
  .use(logger('dev')),
  .use(cookieParser()),
  .use(bodyParser.urlencoded({ extended: true })),
  .use(bodyParser.json()),
  .use(express.static('public'));

// MONGO
mongoose.connect('mongodb://localhost/jmnyGoals')

// MODELS
// var User = require('./models/user.js');
// var Goal = require('./models/goal.js')

// SEED

// ROUTES////////////////////////////////////////

// TEMP STUFF && GARBAGE/////////////////////////
