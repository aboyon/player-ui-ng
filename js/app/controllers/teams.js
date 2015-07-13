(function(){
  angular.module("appUi.teams",[]).
    controller("TeamsController", ['$scope', '$http', 'apiDataEndpoint', function ($scope, $http, apiDataEndpoint) {
      $http.get(apiDataEndpoint('teams')).success(function(data) {
        $scope.teams = data;
      });
    }]);
})();
