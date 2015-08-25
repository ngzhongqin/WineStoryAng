app.service('CartService',['$http','$cookies', function($http,$cookies){
    this.prep_cart = prepCart;

    function prepCart(ngCart,checkout,callback) {
        console.log("CartService - prepCart");
        var session_id = $cookies.get('winestory_session');
        var req_url = backendHostname+'/cart?action=PrepCart'+'&'+'session_id='+session_id;
        console.log("CartService - prepCart checkout.name:"+checkout.name);
                
        var data = {
            'ngCart' : ngCart,
            'checkout': checkout
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
        });
    };
}]);
