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
                $scope.code = data.data.code;
                console.log("LoginCtrl success: code: "+data.data.code); 
                $scope.message = data.data.message;
                console.log("LoginCtrl success: message: "+data.data.message); 
                $scope.session_id = data.data.session_id;
                console.log("LoginCtrl success: session_id: "+data.data.session_id); 
                

            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});