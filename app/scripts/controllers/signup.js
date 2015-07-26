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
    console.log("PSignUpCtrl submitPost");
          var data = {
              'email' : $scope.signup.email,
              'password' : $scope.signup.password,
              'full_name' : $scope.signup.full_name
          };

          var req = {
           method: 'POST',
           url: 'http://localhost:8080/signup',
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


console.log("PSignUpCtrl submitPost req email:"+req.data.data.email);
console.log("PSignUpCtrl submitPost req full_name:"+req.data.data.full_name);
console.log("PSignUpCtrl submitPost req password:"+req.data.data.password);


          $http(req).success(function (data, status, headers, config) {
                $scope.signup.email = data.email; 
                $scope.signup.full_name = data.full_name; 
                $scope.signup.password = data.password; 
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});