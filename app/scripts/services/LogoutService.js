app.service('LogoutService',['$http','$cookies','$location','$rootScope', function($http,$cookies,$location,$rootScope){
    this.logout = logout;

    function logout(callback) {
        console.log("LogoutService - logout");
        var session_id = $cookies.get('winestory_session');
        var req_url = backendHostname+'/login?action=Logout'+'&'+'session_id='+session_id;
        var data = {
          };
    
        $http({
            url: req_url,
            method: 'POST',
            headers: {
                'Content-Type':  "text/plain"
            },
            data: {data: data}
        }).success(function (data, status, header, config){
            callback(data);
            $cookies.remove('winestory_session');
            $rootScope.code = data.returnStatus.code;
            $rootScope.message = data.returnStatus.message;
            $location.path('/store');
        });
    };
}]);
