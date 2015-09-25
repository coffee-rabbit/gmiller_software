var angular = require('angular');

var nav_link = function($location, $window) {
  return {
    require: '^navbar',
    restrict: 'E',
    replace:true,
    transclude: true,
    scope: {
      href: '@',
      newTab: '@'
    },
    link: function(scope, element, attrs, navCtrl) {
      navCtrl.addLink(scope);
      scope.select = function(){
        navCtrl.select(scope);
        if(scope.newTab === 'true'){
          $window.open(scope.href);
        }
        else{
          $location.url(scope.href);
        }
      };
    },
    templateUrl: 'assets/nav/nav_link.html'
  };
};

module.exports = nav_link;
