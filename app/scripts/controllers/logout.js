'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the winestoryApp
 */

app.controller('LogoutCtrl', function ($scope, $rootScope, $http, $cookies, $location,LogoutService) {
    
    LogoutService.logout(function(data){});
    
});