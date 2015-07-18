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
angular
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpCtrl',
        controllerAs: 'signup'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
