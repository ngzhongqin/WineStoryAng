app.service('AlertBoxService',['$http','$cookies','$rootScope', 
                               function($http,$cookies,$rootScope){
    
//    this.showGreen = showGreen;
//    this.showRed = showRed;
    this.showAlert = showAlert;
    
    function showAlert(colour){
        console.log("AlertBoxService - showAlert colour-"+colour); 
        if(colour == 'R'){
            showRed();
        }else{
            if(colour == 'G'){
                  showGreen(); 
            }
        }
        
    }
    
    function showGreen(){
//        console.log("AlertBoxService - showGreen"); 
        $(".greenbox").show();
        $(".redbox").hide();
        $(".greenbox").fadeIn(50);
        setTimeout(function(){ 
             $(".greenbox").fadeOut(500);
        }, 2000);
    };
    
    function showRed(){
//        console.log("AlertBoxService - showRed"); 
        $(".redbox").show();
        $(".greenbox").hide();
        $(".redbox").fadeIn(50);
        setTimeout(function(){ 
             $(".redbox").fadeOut(500);
        }, 2000);
    };
    
}]);