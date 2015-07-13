(function() {
  var playersApp = angular.module("appUi", [
    "appUi.navigation",
    "appUi.sectionContent",
    "appUi.routing",
    "appUi.players",
    "appUi.teams",
    "appUi.matches"
  ]).factory('apiDataEndpoint', function() {
      return function(resource_path) {
        return "http://localhost:3000/api/v1/" + resource_path
      };
    });
})();
