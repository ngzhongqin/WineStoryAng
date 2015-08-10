'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the pssdashApp
 */

app.controller('StoreCtrl', function ($scope, $http,$routeParams, SplitArrayService, $cookies, $rootScope) {

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
          console.log("data.user.full_name"+ data.user.full_name);
          $scope.rows   = SplitArrayService.SplitArray($scope.wines, 3);
          console.log("data.data"+ data.data);
          console.log("$scope.wines: "+ $scope.wines);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });



        $scope.addToCart = function (wine) {
          console.log("StoreCtrl addToCart");
          var data = {
              'dummy'     : 'dummy'
          };

          var session_id = $cookies.get('winestory_session');
          console.log("StoreCtrl: winestory_session: "+session_id);

          var req_url = backendHostname+'/store?action=AddToCart'+'&'+'wine='+wine.id+'&'+'session_id='+session_id;
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
                $location.path('/cart');
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

  };

});