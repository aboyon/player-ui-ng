(function(){
  angular.module("appUi.players",[]).
    controller("PlayersController", ['$scope', '$http', 'apiDataEndpoint', function ($scope, $http, apiDataEndpoint) {
      $http.get(apiDataEndpoint('players')).success(function(data) {
        $scope.players = data;
      });
    }]);

})();
