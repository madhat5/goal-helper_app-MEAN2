// TEST
// console.log('Sim Sim Salabim');

// GOAL CONTROLLER
angular.module('MyGoals', []).directive('ngmygoals', function(){
  return{
    controllerAs: 'goalController',
    controller: ['$http', function GoalCtrl($http){

      this.$http = $http;
      var self = this;
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

      // CREATE/ADD, POST
      this.addGoal = function(){
        self.$http.post('/goals', {title: this.formGoalTitle}).then(function success(res){
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
          self.formGoalTitle = goal.title;
          // self.formGoalStep = goal.step;
        };

        this.editGoal = function(){
          var id = this.formGoalId;
          self.$http.put('/goals/' + id, {
            title: this.formGoalTitle,
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

    }] // end of controller
  }; // end of return
}); // end of angular.module

// TEMP STUFF ///////////////////////////////////

