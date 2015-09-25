var angular = require('angular');
var navbar = require('./navbar');
var nav_link = require('./nav_link');

 module.exports = angular.module('navDirectives',[])
 .directive('navbar',navbar)
 .directive('navLink', nav_link);


