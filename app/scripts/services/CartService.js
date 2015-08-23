app.service('CartService', function ($cookies,$http,$rootScope) {
return {
    getCartItems: function (globalCart) {
        var session_id = $cookies.get('winestory_session');
        console.log("CartService: winestory_session: "+session_id);

        var data = {
            'globalCart' : globalCart,
        };

        var req_url = backendHostname+'/cart?action=GetDetails'+'&'+'session_id='+session_id;
        var req = {
         method: 'POST',
         url: req_url,
         headers: {
           'Content-Type': "text/plain"
         },
         data:{data: data}
        }

          $http(req).success(function (data, status, headers, config) {
                
          }).error(function (data, status, headers, config) {
              $scope.status = status + ' ' + headers;
          });         
    },
    
}


});