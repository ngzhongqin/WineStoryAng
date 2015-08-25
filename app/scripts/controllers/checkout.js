'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the winestoryApp
 */

app.controller('CheckoutCtrl', function ($scope, ngCart, $cookies, $rootScope, UserService, UserService2, CartService) {
    UserService.getCurrentUser('checkout');
    $scope.ngCart = ngCart;
    
    UserService2.user(function(data) {
        $scope.checkout.name = data.full_name;
        $scope.checkout.email = data.email;
        $scope.checkout.address = data.address;
        $scope.checkout.postal_code = data.postal_code;
    }); 
    
    $scope.review_order = function(){
        console.log("CheckoutCtrl - review_order clicked on");
        CartService.prep_cart(ngCart,$scope.checkout,function(data){
            
        });
    }
    
});