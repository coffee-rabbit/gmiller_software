var angular = require('angular');
var router = require('angular-route');
require('./home');
require('./nav');

var app = angular.module('gmlrApp',['ngRoute','navModule','homeModule']);

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
