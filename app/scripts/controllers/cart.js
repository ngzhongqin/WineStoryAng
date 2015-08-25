'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the winestoryApp
 */

app.controller('CartCtrl', function ($scope ,CartService, ngCart, $cookies, $rootScope, UserService, $location) {
    UserService.getCurrentUser('cart');
    ngCart.setTaxRate(7);
    ngCart.setShipping(20);
    
    $scope.checkout = function(){
        $location.path('/checkout');
    }

    
});