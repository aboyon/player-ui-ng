(function(){
  angular.module('appUi.routing', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
       .when('/players', {
        templateUrl: 'js/app/templates/players.html',
        controller: 'PlayersController'
      })
       .when('/teams', {
        templateUrl: 'js/app/templates/teams.html',
        controller: 'TeamsController'
      })
       .when('/matches', {
        templateUrl: 'js/app/templates/matches.html',
        controller: 'MatchesController'
      });

    $locationProvider.html5Mode(true);

    });

})();