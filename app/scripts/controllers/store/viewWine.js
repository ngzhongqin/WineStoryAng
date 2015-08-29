'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:WineViewCtrl
 * @description
 * # WineViewCtrl
 * Controller of the winestoryApp
 */

app.controller('WineViewCtrl', function ($scope, $http, $location, $routeParams, $cookies, StoreService, CartService) {

  console.log("WineViewCtrl - $routeParams.param1: "+$routeParams.param1);
    
  StoreService.get_wine($routeParams.param1,function(data){
        $scope.wine = data.data;         
    });
    
});