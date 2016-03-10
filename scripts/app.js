// app.js runs the angularJS

// to get angular to start working, begin with empty array
angular.module("todoListApp", [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log("Hello there! This is the helloWorld controller function, in the mainCtrl");
    };
  });
