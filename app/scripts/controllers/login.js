'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the winestoryApp
 */

app.controller('LoginCtrl', function ($scope, $rootScope, $http, $cookies, $location, LoginService) {

	$scope.submitPost = function () {
        LoginService.login($scope.login.email,$scope.login.password,function(data){});
        
//    console.log("LoginCtrl submitPost");
//          var data = {
//              'email' : $scope.login.email,
//              'password' : $scope.login.password,
//          };
//
//          var req_url = backendHostname+'/login?action=Login';
//
//          var req = {
//           method: 'POST',
//           url: req_url,
//           headers: {
//             'Content-Type':  "text/plain"
//           },
//           data:{data: data}
//          }
//
//
//console.log("LoginCtrl submitPost req email:"+req.data.data.email);
//console.log("LoginCtrl submitPost req password:"+req.data.data.password);
//
//
//          $http(req).success(function (data, status, headers, config) {
//                $scope.code = data.data.code;
//                console.log("LoginCtrl success: code: "+data.data.code); 
//                $scope.message = data.data.message;
//                console.log("LoginCtrl success: message: "+data.data.message); 
//                if(data!=null){
//                  if(data.data!=null){
//                      $rootScope.code = data.data.code;
//                      $rootScope.message = data.data.message;
//                      
//                    if(data.data.winestory_session!=null){
//                      $scope.winestory_session = data.data.winestory_session;
//                      $cookies.put('winestory_session', data.data.winestory_session);
//                      console.log("LoginCtrl success: winestory_session: "+data.data.winestory_session); 
//                      $location.path('/store');
//                    }
//                  }
//                }
//
//            }).error(function (data, status, headers, config) {
//                $scope.status = status + ' ' + headers;
//            });

	};

});