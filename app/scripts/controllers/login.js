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
	};

});