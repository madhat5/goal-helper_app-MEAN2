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
var User = require('./models/user');
var Goal = require('./models/goal.js')
var Step = require('./models/step.js')

// SEED

// ROUTES////////////////////////////////////////
// TEST
// app.get('/test', function(req, res){
//   res.send('This is a test');
// });

// USER AUTH ===================================

// REGISTER
app.post('/users', function(req, res){

  var passwordHash = md5(req.body.password);

  var user = new User ({
    // email: req.body.email,
    username: req.body.username,
    password_hash: passwordHash
  });

  user.save(function(err){
    if (err) {
      console.log(err);
      res.statusCode = 503;
    } else {
      console.log('User: ' + user.username + 'is registered');
      res.cookie('loggedinId', user.id)
      res.send({
        id: user.id,
        username: user.username
      });
    };
  });
}); // end of REGISTER

// LOGIN
app.post('/login', function(req, res){

  var requestUsername   = req.body.username,
      requestpasswordHash   = md5(req.body.password);

  User.findOne({'username': requestUsername}).exec(function( err, user ){
      if (user != null && requestpasswordHash == user.password_hash){
        res.cookie('loggedinId', user.id);
        res.send(user);
      } else {
        console.log(err);
        res.statusCode = 400;
        res.send("D'OH...something's wrong")
      };
  });
}); // end of LOGIN

// USER INFO
app.get('/user/:id', function(req, res){
  User.findById(req.params.id).exec(function(err, user){
    if (err){
      console.log(err);
      res.statusCode = 503;
    } else {
      res.send(user);
    };
  });
}); // end of INFO

// LOGOUT ?


// GOAL CRUD ==========================================

// INDEX
app.get('/goals', function(req, res){
  Goal.find().then(function(goals){
    console.log("Goals are being displayed ");
    res.send(goals)
  })
});

// CREATE
app.post('/goals', function(req, res){
  var goal = new Goal(req.body);
  goal.save(function(err){
    if (err){
      console.log('ERROR MSG: ' + err);
    } else {
      console.log('>>> Your goal has been created, and saved');
      res.send(goal)
    };
  })
});

// READ INDIVIDUAL
app.get('goals/:id', function(req, res){
  Goal.findById(req.params.id).then(function(goal){
    console.log(goal);
    res.send(goal)
  });
});

// UPDATE
app.put('/goal/:id', function (req, res){
  Goal.findOneAndUpdate({
    _id: req.params.id
  }, {
    $set: req.body
  }, function(err, goal){
    res.send(goal)
  });
});

// DELETE
app.delete('/goal/:id', function(req, res){
  Goal.findOneAndRemove({ _id: req.params.id }, function(err){
    if (err){ console.log(err) };
    console.log('...Post has been deleted...');
    res.send('Post Removed');
  })
});


// GOAL.STEP CRUD ===================================

// INDEX
// CREATE
// READ INDIVIDUAL
// UPDATE
// DELETE

// TEMP STUFF //////////////////////////////////



