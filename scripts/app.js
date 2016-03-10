// app.js runs the angularJS
//contains the controllers and services *note the "."before controller and services
// to get angular to start working, begin with empty array
angular.module("todoListApp", [])
  .controller('mainCtrl', function($scope, dataService) {

    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data;
    });

    $scope.learningNgChange = function() {
      console.log("An input changed!");
    };

//before adding the service I had a semi-colon below but since .service went after, I had to remove the semi-colon });
  })
  .service('dataService', function($http){
    this.helloConsole = function () {
        console.log('This is the hello console service!');
    };
    this.getTodos = function(callback) {
        $http.get('mock/todos.json')
            .then(callback)
    }
});