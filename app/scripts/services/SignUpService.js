app.service('SignUpService',['$http','$cookies','$location','$rootScope', function($http,$cookies,$location,$rootScope){
    this.sign_up = signUp;

    function signUp(full_name,email,password,callback) {
        console.log("SignUpService - signUp");
        
        var req_url = backendHostname+'/signup?action=SignUp';
        var data = {
            'email' : email,
            'password' : password,
            'full_name' : full_name
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
            $rootScope.code = data.returnStatus.code;
            $rootScope.message = data.returnStatus.message;

            if(data.data!=null){
                if(data.data.session_id!=null){
                    $cookies.put('winestory_session', data.data.session_id);
                    $location.path('/store');
                }
            }
        });
    };
}]);
