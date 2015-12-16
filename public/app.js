// TEST
// console.log('Sim Sim Salabim');
// ====================================================
angular.module('MyGoals', []).directive('ngmygoals', function(){
  return{
    controllerAs: 'goalController',
    controller: ['$http', function GoalCtrl($http){

      this.$http = $http;
      var self = this;

    // GOAL CONTROLLER (AND STEP?)
    // ================================================
      self.goals = [];
      self.totalGoals = 0;

      // ALL GOALS
      this.totalGoals = function() {
        return self.goals.length
      };

      // ALL GOALS, GET
      this.getGoals = function(){
        console.log('Searching for all goals...');
        self.$http.get('/goals').then(function(res){
          // TEST
          console.log(res);

          self.goals = res.data;
        });
        return self.goals;
      }; // end of GOAL GET
      this.getGoals();

      // CREATE GOAL, POST
      this.addGoal = function(){
        self.$http.post('/goals', {goalTitle: this.formGoalTitle}).then(function success(res){
          // TEST
          console.log(res.data);

          self.goals.push(res.data);;
          self.formGoalTitle = '';
        }, function error(){
          console.log("D'OH...CREATE ERROR...")
        });
        // add goal.step ajax call to create?
      }; // end of GOAL POST

      // EDIT GOAL
        this.populateGoalForm = function(goal){
          self.formGoalId = goal._id;
          self.formGoalTitle = goal.goalTitle;
          // self.formGoalStep = goal.step;
        };

        this.editGoal = function(){
          var id = this.formGoalId;
          self.$http.put('/goals/' + id, {
            goalTitle: this.formGoalTitle,
            // steps: this.formGoalStep
          }).then(function success(res){
            // TEST
            console.log(res);

            self.getGoals();
            self.formGoalId = '';
            self.formGoalTitle = '';
          }, function error(){
            console.log("D'OH...EDIT ERROR...")
          });
        }; // end of GOAL PUT

      // DELETE GOAL
      this.deleteGoal = function(goal){
        var id = goal._id;
        self.$http.delete('/goals/' + id).then(function success(res){
          // TEST
          console.log(res);

          self.getGoals();
        }, function error(){
          console.log("D'OH...DELETE ERROR...");
        });
      }; // end of GOAL DELETE

    // USER CONTROLLER
    // ================================================
      // self.users = [];
      self.totalUsers = 0;
      self.currentUser = [{}];
      self.register = false;
      self.login = false;
      self.home = false;
      self.loggedIn = false;

      // ALL USERS
      this.totalUsers = function() {
        return self.users.length
      };

      // USER, GET
      this.getUser = function(){
        console.log('Searching for all users...');
        if (Cookies.get('loggedinId') != null){
          self.$http.get('/users/' + Cookies.get('loggedinId')).then(function success(res){
            // TEST
            console.log(res.data);

            self.loggedIn = true;
            self.register = false;
            self.login = false;
          })
        } else {
          self.loggedIn = false;
        };
      }; // end of USER GET
      this.getUser();

      // REGISTER USER FORM
      this.registerForm = function(){
        self.register = true;
        self.login = false;
      };

      // CREATE USER, POST
      this.registerSubmit = function(){
        self.$http.post('/users', {username: this.registerUsername, password: this.registerPassword}).then(function success(res){
          // TEST
          console.log(res.data);

          self.registerUsername = '';
          self.registerPassword = '';
          self.loggedIn = true;
          self.register = false;
          self.login = false;
        }, function error(){
          alert("D'OH! Seems like Bart broke it. Please try again...");
        });
      }; // end of USER REGISTER

      // LOGIN USER FORM
      this.loginForm = function(){
        self.login = true;
        self.register = false;
      };

      // LOGIN USER
      this.loginSubmit = function(){
        self.$http.post('/login', {username: this.loginUsername, password: this.loginPassword}).then(function success(res){
          // TEST
          console.log(res);

          self.loggedIn = true;
          this.loginUsername = '';
          this.loginPassword = '';
          self.getUser();
        }, function error(){
          alert("D'OH! Seems like the wrong email and/or password. Please try again...");
        });
      }; // end of USER LOGIN

      // LOGOUT USER
      this.logOut = function(){
        Cookies.remove('loggedIn');
        self.getUser
      };

      // // EDIT USER
      //   this.populateUserForm = function(user){
      //     self.formUserId = user._id;
      //     self.formUserUsername = user.username;
      //     self.formUserPassword = user.password_hash;
      //   };

      //   this.editUser = function(){
      //     var id = this.formUserId;
      //     self.$http.put('/users/' + id, {
      //       username: this.formUserUsername,
      //       password_hash: this.formUserPassword
      //     }).then(function success(res){
      //       // TEST
      //       console.log(res);

      //       self.getUser();
      //       self.formUserId = '';
      //       self.formUserUsername = '';
      //       self.formUserPassword = '';
      //     }, function error(){
      //       console.log("D'OH...EDIT ERROR...")
      //     });
      //   }; // end of USER PUT

      // // DELETE USER
      // this.deleteUser = function(user){
      //   var id = user._id;
      //   self.$http.delete('/users/' + id).then(function success(res){
      //     // TEST
      //     console.log(res);

      //     self.getUser();
      //   }, function error(){
      //     console.log("D'OH...DELETE ERROR...");
      //   });
      // }; // end of USER DELETE

    }] // end of controller
  }; // end of return
}); // end of angular.module

// STEP CONTROLLER
// ====================================================


// TEMP STUFF
// ====================================================
