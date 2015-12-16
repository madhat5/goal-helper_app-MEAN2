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

      // CREATE/ADD GOAL, POST
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
        this.populateForm = function(goal){
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
      self.users = [];
      self.totalUsers = 0;

      this.totalUsers = function() {
        return self.users.length
      };

      // ALL USERS, GET
      this.getUsers = function(){
        console.log('Searching for all users...');
        self.$http.get('/users').then(function(res){
          // TEST
          console.log(res);

          self.users = res.data;
        });
        return self.users;
      }; // end of USER GET

      // CREATE/ADD USER, POST
      this.addUser = function(){
        self.$http.post('/users', {username: this.formUserUsername, password_hash: this.formUserPassword}).then(function success(res){
          // TEST
          console.log(res.data);

          self.users.push(res.data);;
          self.formUserUsername = '';
          self.formUserPassword = '';
        }, function error(){
          console.log("D'OH...CREATE ERROR...")
        });
      }; // end of USER POST

      // EDIT USER
        this.populateForm = function(user){
          self.formUserId = user._id;
          self.formUserUsername = user.username;
          self.formUserPassword = user.password_hash;
        };

        this.editUser = function(){
          var id = this.formUserId;
          self.$http.put('/users/' + id, {
            username: this.formUserUsername,
            password_hash: this.formUserPassword
          }).then(function success(res){
            // TEST
            console.log(res);

            self.getUsers();
            self.formUserId = '';
            self.formUserUsername = '';
            self.formUserPassword = '';
          }, function error(){
            console.log("D'OH...EDIT ERROR...")
          });
        }; // end of USER PUT

      // DELETE USER
      this.deleteUser = function(user){
        var id = user._id;
        self.$http.delete('/users/' + id).then(function success(res){
          // TEST
          console.log(res);

          self.getUsers();
        }, function error(){
          console.log("D'OH...DELETE ERROR...");
        });
      }; // end of USER DELETE

    }] // end of controller
  }; // end of return
}); // end of angular.module

// STEP CONTROLLER
// ====================================================


// TEMP STUFF
// ====================================================

