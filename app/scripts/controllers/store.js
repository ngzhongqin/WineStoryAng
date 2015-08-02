'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the pssdashApp
 */

app.controller('StoreCtrl', function ($scope, $http, SplitArrayService) {

    var data = {
        'field1' : 'getWines',
    };

    var req_url = backendHostname+'/store?action=GetAll'
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
          $scope.rows   = SplitArrayService.SplitArray($scope.wines, 3);
          console.log("data.data"+ data.data);
          console.log("$scope.wines: "+ $scope.wines);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });



        $scope.addToCart = function () {
          console.log("StoreCtrl addToCart");
          var data = {
              'wine'     : $routeParams.param1,
              'session_id' : $cookies.get('winestory_session'),
          };

          var req_url = backendHostname+'/store?action=AddToCart'+'&'+'wine='+$routeParams.param1;
          var req = {
           method: 'POST',

           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


          console.log("StoreCtrl addToCart req wine:"+req.data.data.wine);
          console.log("StoreCtrl addToCart req session_id:"+req.data.data.session_id);

          $http(req).success(function (data, status, headers, config) {
                console.log("WineViewCtrl addToCart success");
                $location.path('/store');
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

  };

});