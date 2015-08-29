app.service('StoreService',['$http','$cookies', function($http,$cookies){
    this.get_all = getAll;
    this.get_wine = getWine;

    function getAll(callback) {
        console.log("StoreService - getAll");
        var session_id = $cookies.get('winestory_session');
        var req_url = backendHostname+'/store?action=GetAll'+'&'+'session_id='+session_id;

                
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
        });
    };
    
    function getWine(wine_id,callback) {
        console.log("StoreService - getWine - wine_id:"+wine_id);
        var session_id = $cookies.get('winestory_session');
        
        var req_url = backendHostname+'/store?action=ViewWine'
                    +'&'+'session_id='+session_id
                    +'&'+'wine='+wine_id;
            
        var data = {};
        
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
