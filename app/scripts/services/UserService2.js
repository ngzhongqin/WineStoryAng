app.service('UserService2',['$http','$cookies','$rootScope', function($http,$cookies,$rootScope){
    this.user = getUser;

    function getUser(callback) {
        if($rootScope.user == null){
            console.log("UserService2 - getUser");
            var session_id = $cookies.get('winestory_session');
            var req_url = backendHostname+'/session?action=GetCurrentUser'+'&'+'session_id='+session_id;     
            $http({
                url: req_url,
                method: 'POST'
            }).success(function (data, status, header, config){
                callback(data.user);
                $rootScope.user = data.user;
            });
        }
    };
}]);