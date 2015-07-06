(function(){
  angular.module('appUi.routing', ['ngRoute'])
    .controller('PlayerController', function($scope, $route, $routeParams, $location) {
      $scope.name = "PlayerController";
      $scope.$route = $route;
      $scope.$location = $location;
      $scope.$routeParams = $routeParams;
    })

    .config(function($routeProvider, $locationProvider) {
      $routeProvider
       .when('/players', {
        templateUrl: 'js/app/templates/players.html',
        controller: 'PlayerController'
      });

    $locationProvider.html5Mode(true);

    });

})();