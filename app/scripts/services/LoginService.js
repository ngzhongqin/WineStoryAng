app.service('LoginService',['$http','$cookies','$location','$rootScope', 'AlertBoxService',
                            function($http,$cookies,$location,$rootScope,AlertBoxService){
    this.login = login;

    function login(email,password,callback) {
//        console.log("LoginService - login");
        
        var req_url = backendHostname+'/login?action=Login';
        var data = {
              'email' : email,
              'password' : password,
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
            
            
            AlertBoxService.showAlert(data.returnStatus.colour);
            
            if(data!=null){
                if(data.data!=null){
                    if(data.data.session_id!=null){
                        $cookies.put('winestory_session', data.data.session_id);
                        $location.path('/store');
                    }
                }
            }
        });
    };
}]);
