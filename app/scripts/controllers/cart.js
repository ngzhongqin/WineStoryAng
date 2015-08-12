'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the winestoryApp
 */

app.controller('CartCtrl', function ($scope ,CartService, $cookies, $rootScope) {
    
    CartService.setGlobalCart();
    
    $scope.displayCart = $rootScope.globalCart;

    $scope.getTotal = function(){
        var total = 0;
        if($scope.displayCart != null){
            for(var i = 0; i < $scope.displayCart.length; i++){
                var item = $scope.displayCart[i];
                total += (item.price * item.qty);
            }
        }
        return total;
    }

    CartService.getCartItems();
    
});