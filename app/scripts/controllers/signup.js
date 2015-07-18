'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the winestoryApp
 */

app.controller('SignUpCtrl', function ($scope, $http) {

	$scope.submitPost = function () {
		alert("submitPost");
          var data = {
              'email' : $scope.signup.email,
              'password' : $scope.signup.password,
              'full_name' : $scope.signup.full_name
          };

          var req = {
           method: 'POST',
           url: 'http://localhost:8080/signup',
           headers: {
             'Content-Type': "application/json"
           },
           data:{data: data}
          }

          $http(req).success(function (data, status, headers, config) {
                $scope.signup.email = data.email; 
                $scope.signup.full_name = data.username; 
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});