let app = angular.module('myApp', []);
//APLIKACIJA
app.controller("mainCtrl", function($scope) {
    $scope.tasks = [
      {
        msg : "Go to store",
        done : false,
      },
      {
        msg : "Wash clothes",
        done : false,
      },
      {
        msg : "Go jogging",
        done : false,
      }
    ];
    //primili smo index iz index.html
    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index,1)
    }
    $scope.addTask = function() {
      $scope.tasks.push({
        msg : $scope.newTask,
        done : false,
      })
      $scope.newTask = "";
    }

  })
