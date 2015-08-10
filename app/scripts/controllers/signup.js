'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the winestoryApp
 */

app.controller('SignUpCtrl', function ($scope, $rootScope, $http, $cookies, $location) {

	$scope.submitPost = function () {
    console.log("PSignUpCtrl submitPost");
          var data = {
              'email' : $scope.signup.email,
              'password' : $scope.signup.password,
              'full_name' : $scope.signup.full_name
          };

        
        var req_url = backendHostname+'/signup?action=SignUp';
        
          var req = {
           method: 'POST',        
           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          };


        console.log("PSignUpCtrl submitPost req email:"+req.data.data.email);
        console.log("PSignUpCtrl submitPost req full_name:"+req.data.data.full_name);
        console.log("PSignUpCtrl submitPost req password:"+req.data.data.password);


          $http(req).success(function (data, status, headers, config) {
                $scope.code = data.data.code;
                console.log("SignUpCtrl success: code: "+data.data.code); 
                $scope.message = data.data.message;
                console.log("SignUpCtrl success: message: "+data.data.message); 
                if(data!=null){
                  if(data.data!=null){
                      $rootScope.code = data.data.code;
                      $rootScope.message = data.data.message;
                      
                    if(data.data.winestory_session!=null){
                      $scope.winestory_session = data.data.winestory_session;
                      $cookies.put('winestory_session', data.data.winestory_session);
                      console.log("SignUpCtrl success: winestory_session: "+data.data.winestory_session); 
                      $location.path('/store');
                    }
                  }
                }
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});