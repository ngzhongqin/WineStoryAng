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
    'ngCart',
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
        templateUrl: 'views/store/store.html',
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
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
      })
      .otherwise({
        redirectTo: '/'
      });
  });




