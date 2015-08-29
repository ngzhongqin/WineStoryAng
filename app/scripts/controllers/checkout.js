'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the winestoryApp
 */

app.controller('CheckoutCtrl', function ($scope, ngCart, $cookies, $rootScope, 
                                          UserService2, CartService, $location) {
    $scope.ngCart = ngCart;
    
    $scope.isCartEmpty = function(){
        if(ngCart.isEmpty()){
            $location.path('/store');
        }
        return ngCart.isEmpty();   
    }
    
    UserService2.user(function(data) {
        if(data!=null){
            $scope.checkout.name = data.full_name;
            $scope.checkout.email = data.email;
            $scope.checkout.address = data.address;
            $scope.checkout.postal_code = data.postal_code;
        }
    }); 
    
    $scope.review_order = function(){
        console.log("CheckoutCtrl - review_order clicked on");
        CartService.prep_cart(ngCart,$scope.checkout,function(data){
            
        });
    }
    
});