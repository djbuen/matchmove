'use strict'

angular.module('slick', [ 
   'ngRoute','ngCookies'])
  .config ($routeProvider) ->
    $routeProvider.when '/',
      templateUrl: 'views/main.html'
      controller: 'MainCtrl'
    .when '/post',
      templateUrl: 'views/post.html'
      controller: 'PostCtrl'
    .otherwise 
      redirectTo: '/'
