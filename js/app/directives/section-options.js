(function() {
  angular.module("appUi.sectionOptions",[])
    .directive("sectionOptions", function(){
      return {
        restrict: "E",
        templateUrl: "./js/app/templates/section-options.html"
      }
    });
})();
