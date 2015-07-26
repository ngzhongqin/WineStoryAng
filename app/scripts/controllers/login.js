'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the winestoryApp
 */

app.controller('LoginCtrl', function ($scope, $http) {

	$scope.submitPost = function () {
    console.log("LoginCtrl submitPost");
          var data = {
              'email' : $scope.login.email,
              'password' : $scope.login.password,
          };

          var req = {
           method: 'POST',
           url: 'http://localhost:8080/login',
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


console.log("LoginCtrl submitPost req email:"+req.data.data.email);
console.log("LoginCtrl submitPost req password:"+req.data.data.password);


          $http(req).success(function (data, status, headers, config) {
                $scope.signup.email = data.email; 
                $scope.signup.full_name = data.full_name; 
                $scope.signup.password = data.password; 
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});