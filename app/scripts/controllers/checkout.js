'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the winestoryApp
 */

app.controller('CheckoutCtrl', function ($scope, ngCart, $cookies, $rootScope, UserService) {
    UserService.getCurrentUser('checkout');
    
});