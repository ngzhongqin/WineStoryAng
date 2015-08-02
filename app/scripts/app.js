/* global app:true */
/* exported app */

'use strict';
 $(document).foundation();
/**
 * @ngdoc overview
 * @name winestoryApp
 * @description
 * # winestoryApp
 *
 * Main module of the application.
 */

var backendHostname = 'http://localhost:8080'

var app = angular
  .module('winestoryApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
      .when('/wine/:param1', {
        templateUrl: 'views/store/wineView.html',
        controller: 'WineViewCtrl',
        controllerAs: 'wineView'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
