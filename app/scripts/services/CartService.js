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
    
    addToCart: function (wine) {
        var session_id = $cookies.get('winestory_session');
        console.log("CartService: addToCart winestory_session: "+session_id+" wine.id:"+wine.id);
        wine.qty = 1;
        
        this.setGlobalCart();
        
        if( !this.containsObject(wine,$rootScope.globalCart)){
            $rootScope.globalCart.push(wine);
            localStorage['cart'] = JSON.stringify($rootScope.globalCart);
        }
    },
    
    containsObject: function (obj, list) {
        var i;
        if(list != null){
           for (i = 0; i < list.length; i++) {
                if (list[i].id === obj.id) {
                    return true;
                }
            }           
        }

        return false;
    },
    
    setGlobalCart: function(){
        console.log('setGlobalCart');
        if( $rootScope.globalCart == null){
            console.log('setGlobalCart $rootScope.globalCart is null');
            if( localStorage['cart'] != null){    
                    console.log('setGlobalCart $rootScope.globalCart = localStorage');
                    $rootScope.globalCart = JSON.parse(localStorage['cart'] || '{}');
            }else{
                console.log('setGlobalCart $rootScope.globalCart as array');
                $rootScope.globalCart = [];  
            } 
        } 
    }
        
}


});