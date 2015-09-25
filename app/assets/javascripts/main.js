var angular = require('angular');
var router = require('angular-route');
require('./posts');
require('./home');
require('./nav');

var app = angular.module('blog',['ngRoute','app.nav','home','posts']);

// Configureation
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'assets/home.html',
  })
  .when('/projects', {
    templateUrl: 'assets/projects.html'
  });
});
