
//Not in use.
//decided to do the authentication at every call page controller.

app.service('UserService', function ($cookies, $http) {
return {
    getCurrentUser: function () {
        var currentUser;
        var session_id = $cookies.get('winestory_session');
        console.log("UserService  getCurrentUser: session_id:"+session_id);
        if(session_id!=null){
            console.log("UserService  getCurrentUser");
            var data = {
                'winestory_session' : session_id
            };

            var req_url = backendHostname+'/session?action=getCurrentUser';

            var req = {
                method: 'POST',
                url: req_url,
                headers: {
                    'Content-Type':  "text/plain"
                },
                    data:{data: data}
            }

          $http(req).success(function (data, status, headers, config) {
                currentUser = data.data.currentUser;
                console.log("UserService  getCurrentUser success: currentUser: "+currentUser);

            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });
        }

        return currentUser;
    }
}
});