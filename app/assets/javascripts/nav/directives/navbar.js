var angular = require('angular');

var navbar = function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      projectName: '@'
    },
    controller: function($scope) {
      var links = $scope.links= [];

      this.select = function(link) {
        angular.forEach(links, function(link) {
          link.selected = false;
        });
        link.selected = true;
      };

      this.addLink = function(link) {
        if (links.length === 0) {
          this.select(link);
        }
        links.push(link);
      };
    },
    templateUrl: 'assets/nav/navbar.html'
  };
};

module.exports = navbar;
