(function() {
  angular.module("appUi.sectionTitle",[])
    .directive("sectionTitle", function(){
      return {
        restrict: "E",
        templateUrl: "./js/app/templates/section-title.html"
      }
    });
})();
