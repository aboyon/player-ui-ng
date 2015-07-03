(function(){
  angular.module("appUi.navController",[]).
    controller("UiNavigationController", function() {
      this.section = {};

      this.browseTo = function(place) {
        console.log(place);
        this.section.title = place;
      };

    })
})();
