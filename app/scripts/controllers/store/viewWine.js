'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:WineViewCtrl
 * @description
 * # WineViewCtrl
 * Controller of the winestoryApp
 */

app.controller('WineViewCtrl', function ($scope, $http, $location, $routeParams, $cookies) {

  console.log("$routeParams.param1: "+$routeParams.param1);
  var url = backendHostname+'/store?action=ViewWine'+'&'+'wine='+$routeParams.param1;

    var data = {
        'field1' : 'dummy'
    };

    var req = {
     method: 'GET',
     url: url,
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.wine = data.data; 
          console.log("$scope.wine: "+ $scope.wine);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });

	$scope.addToCart = function () {
    console.log("WineViewCtrl addToCart");
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


console.log("WineViewCtrl addToCart req wine:"+req.data.data.wine);
console.log("WineViewCtrl addToCart req session_id:"+req.data.data.session_id);



          $http(req).success(function (data, status, headers, config) {
                console.log("WineViewCtrl addToCart success");
                $location.path('/store');
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});