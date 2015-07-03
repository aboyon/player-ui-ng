(function() {
  angular.module("appUi.sectionContent",[])
    .directive("sectionContent", function(){
      return {
        restrict: "E",
        templateUrl: "./js/app/templates/section-content.html"
      }
    });
})();
