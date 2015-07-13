(function(){
  angular.module("appUi.matches",[]).
    controller("MatchesController", ['$scope', '$http', 'apiDataEndpoint', function ($scope, $http, apiDataEndpoint) {
      $http.get(apiDataEndpoint('matches')).success(function(data) {
        $scope.matches = data;
      });
    }]);
})();
