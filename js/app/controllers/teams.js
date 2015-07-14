(function(){
  angular.module("appUi.teams",[]).
    controller("TeamsController", ['$scope', '$http', 'apiDataEndpoint', function ($scope, $http, apiDataEndpoint) {
      $http.get(apiDataEndpoint('teams')).success(function(data) {
        $scope.teams = data;
      });
    }])
    .controller("TeamController", ['$scope', '$http', '$routeParams', 'apiDataEndpoint', function ($scope, $http, $routeParams, apiDataEndpoint) {
      $scope.team_id = $routeParams.team_id;

      $http.get(apiDataEndpoint('teams/'+$scope.team_id)).success(function(data) {
        $scope.team = data;
      });
    }]);
})();
