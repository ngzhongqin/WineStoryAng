'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the winestoryApp
 */

app.controller('SignUpCtrl', function ($scope, $rootScope, $http, $cookies, $location, SignUpService) {

	$scope.submitPost = function () {
        SignUpService.sign_up($scope.signup.full_name,
                              $scope.signup.email,
                              $scope.signup.full_name,
                              function(data){});
        
	};

});