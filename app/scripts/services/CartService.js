app.service('CartService',['$http','$cookies','$rootScope', '$location',
                           function($http,$cookies,$rootScope,$location){
    this.prep_cart = prepCart;                
    this.getSavedReviewOrderData=get_review_order_data;
                               
    var review_order_data;
    
    function save_review_order_data(data) {
        review_order_data = data;
    }
                               
    function get_review_order_data() {
        return review_order_data;
    }

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
            save_review_order_data(data.data);
            $location.path('/review_order');
        });
    };
                               
                               
                            
}]);
