'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the winestoryApp
 */

app.controller('StoreCtrl', function ($scope, $http,
                                       $routeParams, SplitArrayService,
                                       $cookies, $rootScope, CartService, 
                                       ngCart, StoreService) {

    StoreService.get_all(function(data) {
          $scope.wines = data.data.wines; 
          $scope.rows   = SplitArrayService.SplitArray($scope.wines, 3);
    }); 
    
    $scope.addToCart = function (wine) {
        console.log("StoreCtrl addToCart");
        CartService.addToCart(wine);
    };

});