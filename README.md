# goal-helper_app-MEAN - Final Project (MEAN)
---

Links:

- Instructions:
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/projects/project4/project.md
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/schedule.md

- Project:
    - GitHub
        - https://github.com/madhat5/goal-helper_app-MEAN2
    - Wireframes
        - https://moqups.com/#!/edit/madhat5/jR69snL3
    - Trello link
        - https://trello.com/b/79qQIpKD/wdi-project-4a-post-it
    - Heroku
        - 

---
Technical Requirements:

- Build a full-stack application by making your own backend and your own front-end
- Have an API of your design
- Have an interactive front-end, preferably using a modern front-end framework
- Be a complete product, which most likely means multiple relationships and CRUD functionality for at least a couple models
- Use a database, whether that's one we've covered in class or one you want to learn
- Implement thoughtful user stories that are significant enough to help you know which features to build and which to scrap
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers
- Be deployed online so it's publicly accessible

Necessary Deliverables

- A working API, hosted somewhere on the internet
- A working front-end, hosted somewhere on the internet
- A link to your hosted working app in the URL section of your Github repo
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project
- A readme.md file with:
- An embedded screenshot of the app
- Explanations of the technologies used
- A couple paragraphs about the general approach you took
- Installation instructions for any dependencies
- Link to your user stories – who are your users, what do they want, and why?
- Link to your wireframes – sketches of major views / interfaces in your application
- Link to your pitch deck – documentation of your wireframes, user stories, and proposed architecture
- Descriptions of any unsolved problems or major hurdles you had to overcome

---
Timeline goals: (start by)

- Wed 12/2 --x--
    - Start planning mini-app (Rails or Mean) today
- Sat 12/5 --o--
    - 1st mini-app finished during the weekend
- Sun 12/6 --o--
    - Start planning 2nd mini-app 
- Wed 12/9
    - 2nd app finished 
- Thu 12/10
    - Final project planning
- Thu 12/17 
    - Final project finished

--
Deployment flow:

- Create development branch
    - from master
        - git checkout -b development       
- Pull @ beginning of day
    - from development
        - git pull origin master
        - (npm install) if needed
- Create 1 branch per file feature
    - from development
        - git checkout -b file_feature
- By end of day 
    - from branch
        - git add .
        - git commit -m "update details"
        - git push origin file_feature
        - (gitHub
            - Pull request)
        - OR
        - (git push origin development)
        - git checkout development
    - from development
    - (gitHub
        - Pull request)
    - OR
    - (git push origin master)

---
MVP

Models:

- user
    - username/email: string
    - password: string?
    - embed goals: obj

- goals
	- title: string
	- steps: string
		- step_completed: boolean
	- goal_completed: boolean

- step

User story: (UPDATE)
(MOAR MODALS!!!)

- landing page:
    - log in button
        - > opens login form (passport) as modal
    - register form
    - tutorial button
    - register buton
        - > opens register form (passport) as modal
    - # of goals and # of goals completed


+features:

- 

---
---
App Build Steps:

- touch server.js --x--

- npm init --x--
	-'enter' through all the prompts

- packages setup --x--
	- npm install --save express morgan mongoose cookie-parser body-parser md5
	- app.js
		- dependecies
			- var express = require('express');
			- logger = require('morgan')
			- mongoose = require('mongoose')
			- cookieParser = require('cookie-parser')
            - bodyParser = require('body-parser')
            - expressSession = require('md5')
		- express
			- var app = express();
		- middleware
			- app.use(logger('dev'));
			- app.use(cookieParser());
            - app.use(bodyParser.urlencoded({ extended: true}));
            - app.use(bodyParser.json());
            - (ADD SCRIPTS, if needed)
		- mongo
			- mongoose.connect('mongodb://localhost/db_name');

- app port & listener --x--
	- server.js
		- var port = process.env.PORT || 3000;
		- app.listen(port);
		- console.log('Silence please...' + '\n' + 'Curtains up...' + '\n' + 'Server started on: ' + port);

- test connection --x--
    - setup basic test route
    - - launch server (nodemon)

- safety --x--
    - touch .gitignore 
    - add:
        - node_modules

- mkdir public --x--
	- server.js
		- app.use(express.static('public'));
	- touch public/index.html
	- touch public/app.js
	- touch public/style.css

- test connection --x--
    - setup basic test route
    - setup basic test index.html/app.js
    - launch server (nodemon)

- models build --x--
    - mkdir models
    	- touch models/user.js
    - server.js
    	- var User = require('./models/user.js');
    - user.js
		- var mongoose = require('mongoose'),
		- var userSchema = new mongoose.Schema({ ... });
		- var User = mongoose.model('User', userSchema);
		- module.exports = User

- user auth build --ox--
	- server.js
		- create register
		- create login/user info
		- logout?
	- CURL test
		- register: curl -X POST -d '{"username": "test@test.com", "password": "test"}' http://localhost:3000/users
		- login: curl -X POST -d '{"username": "test@test.com", "password": "test"}' http://localhost:3000/login

- models build --x--
    - server.js
		- var Goal = require('./models/goal');
		- var Step = require('./models/step.js')
    - goal.js
        - var mongoose = require('mongoose');
        - var goalSchema = new mongoose.Schema({ ... });
        - var Goal = mongoose.model('Goal', goalSchema);
        - module.exports = Goal;
    - step.js
        - var mongoose = require('mongoose');
        - var stepSchema = new mongoose.Schema({ ... });
        - var Step = mongoose.model('Step', stepSchema);
        - module.exports = Step;
    - server.js
    	- Goal CRUD
    	- Step CRUD

- Story build --ox--
    - public/index.html
    	- CDN --o--
			- js-cookie
				- <script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.0.4/js.cookie.js"></script>
		    - angular
		    	- <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		    - bootstrap
		    	- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
		    	- html build
    - public/app.js
    	- angular build
    		- user auth
    			- build around ngshow (if user true, show all, else (please login))
    		- goal CRUD controller
    		- goal.step CRUD controller
    		- user controller
    - public/style.css
		- bootstrap

- Heroku --ox--
	- heroku create
	- touch Procfile
	- Profile
		- web: node app.js
	- npm install -g foreman
	- server.js
		- var mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/jmnyGoals';
		- mongoose.connect(mongoUri);
	- git push heroku master

- Remaining/+Features:
	- CRITICAL
		- show/hide based on user login --x
		- push goal create to user.goal
		- step crud + save to user
			 - get all user.goals.steps
			 - create step + auto display form when creating a goal + push to goal.step
			 - delete/completed
		- add submit button for edit goal
		- navbar
	- SHORT
		- navbar with goals
		- goal display:
			- goal + next step
		- modal to show goal list + associated steps from navbar as drop down/ or just navbar dropdown?
		- alert when click on my goals (nav bar): if not logged in, "please log in"
		- modal alert when user created, setTimeout
	- LONG
		- make responsive
		- goal display:
			- add div lines around goal per number of steps
		- show navbar on hover
		- score tracker
		- color change based on step status




---
---

---
---
Reference

- Git merging
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d02/INSTRUCTOR/git_solo.md
	
- Heroku
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d04/INSTRUCTOR/heroku.md

- Embedding/referencing:
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d01/INSTRUCTOR/%5Ba1%5Dmongo.md
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d01/INSTRUCTOR/%5Bb1%5Dmongoose_data_modeling.md

- Bootstrap
	- http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/

- Angular if/else
	- https://docs.angularjs.org/api/ng/directive/ngSwitch
	- http://stackoverflow.com/questions/15810278/if-else-statement-in-angularjs-templates

- Misc
	- CSS colors:
		- https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/
		- http://stackoverflow.com/questions/23201134/transparent-argb-hex-value
	- Mongo commands:
		- https://docs.mongodb.org/manual/reference/mongo-shell/




---
---
Comments/Notes:

- 

---
---
Shoutouts:

- Katie Z (user-auth; bootstrap modal)
- Malina (design)
- Kyle (dragable div)
- Robbie (dynamic searches)


