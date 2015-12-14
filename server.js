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
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Silence please...' + '\n' + 'Curtains up...' + '\n' + 'Server started on: ' + port);

// MIDDLEWARE
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// MONGO
mongoose.connect('mongodb://localhost/jmnyGoals')

// MODELS
// var User = require('./models/user.js');
// var Goal = require('./models/goal.js')

// SEED

// ROUTES////////////////////////////////////////
// TEST
// app.get('/test', function(req, res){
//   res.send('This is a test');
// });

app.get('/', function(req, res){

});


// TEMP STUFF && GARBAGE/////////////////////////
