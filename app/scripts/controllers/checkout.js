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
    $scope.ngCart = ngCart;
    
    $scope.review_order = function(){
        console.log("CheckoutCtrl - review_order clicked on");
    }
    
});