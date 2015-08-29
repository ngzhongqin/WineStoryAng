'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the winestoryApp
 */

app.controller('CartCtrl', function ($scope, ngCart, $cookies, $rootScope, UserService2, $location) {
    UserService2.user(function(data) {}); 
    
    ngCart.setTaxRate(7);
    ngCart.setShipping(20);
    
    $scope.checkout = function(){
        $location.path('/checkout');
    }
    
    $scope.isCartEmpty = function(){
//        console.log('CartCtrl - isCartEmpty:'+ngCart.isEmpty());
        return ngCart.isEmpty();   
    }

    $scope.store = function(){
        $location.path('/store');
    }
});