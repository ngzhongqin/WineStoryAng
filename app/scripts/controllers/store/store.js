'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the winestoryApp
 */

app.controller('StoreCtrl', function ($scope, $http,$routeParams, SplitArrayService,$cookies, $rootScope, CartService) {

    var session_id = $cookies.get('winestory_session');
    console.log("StoreCtrl: winestory_session: "+session_id);

    var data = {
        'field1' : 'getWines',
    };

    var req_url = backendHostname+'/store?action=GetAll'+'&'+'session_id='+session_id;
    var req = {
     method: 'POST',
     url: req_url,
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.wines = data.data; 
          $rootScope.user = data.user;
          console.log("data.user"+ data.user);
          if(data.user!=null){
                console.log("data.user.full_name"+ data.user.full_name);
          }
          $scope.rows   = SplitArrayService.SplitArray($scope.wines, 3);
          console.log("data.data"+ data.data);
          console.log("$scope.wines: "+ $scope.wines);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });



    $scope.addToCart = function (wine) {
      console.log("StoreCtrl addToCart");
        CartService.addToCart(wine);
    };

});