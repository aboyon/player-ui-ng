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
        return API_BASE_ENDPOINT + resource_path
      };
    });
})();