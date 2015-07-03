(function() {
  angular.module("appUi.navigation",[])
    .directive("topBarLinks", function(){
      return {
        restrict: "E",
        templateUrl: "./js/app/templates/top-bar-links.html"
      }
    });
})();
