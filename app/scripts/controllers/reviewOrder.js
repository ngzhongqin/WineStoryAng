'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:ReviewOrderCtrl
 * @description
 * # ReviewOrderCtrl
 * Controller of the winestoryApp
 */

app.controller('ReviewOrderCtrl', function ($scope, ngCart, $cookies, $rootScope, 
                                          UserService2, CartService, $location) {
    ngCart.setTaxRate(7);
    ngCart.setShipping(20);
    
    UserService2.user(function(data){});
    
    
    $scope.review_order = CartService.getSavedReviewOrderData();
    console.log('ReviewOrderCtrl $scope.review_order='+$scope.review_order);
    if($scope.review_order == null){
        $location.path('/cart');   
    }else{
        $scope.items = $scope.review_order.items;
    }
    
    $scope.to2decimal = function (raw_value){
        return Number(raw_value).toFixed(2);   
    }
    
    $scope.getShipping = function(){
        if($scope.review_order != null){
            if($scope.review_order.shipping_cost != 0){
                return $scope.to2decimal($scope.review_order.shipping_cost);
            }else{
                return 'Free';   
            }
        }
    }
});

