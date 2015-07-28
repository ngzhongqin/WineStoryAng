'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the pssdashApp
 */

app.controller('StoreCtrl', function ($scope, $http) {

    var data = {
        'field1' : 'getWines',
    };

    var req = {
     method: 'POST',
     url: 'http://localhost:8080/store',
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.wines = data.data; 
          console.log("data.data"+ data.data);
          console.log("$scope.wines: "+ $scope.wines);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });

});