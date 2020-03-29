control.controller('MainController', function($scope, $rootScope, localStorageService) {


  $rootScope.s1Access=false;
  $rootScope.s2Access=false;
  (function(){
    if(localStorageService.get('s1access')){
      $rootScope.s1Access=true;
    }else{
      $rootScope.s1Access=false;
    };

    if(localStorageService.get('s2access')){
      $rootScope.s2Access=true;
    }else{
      $rootScope.s2Access=false;
    }
  })();
  $rootScope.exit=function(){
    ionic.Platform.exitApp();
  };

  $rootScope.doRefresh = function() {
      console.log('refreshing')
      if(localStorageService.get('s1access')){
        $rootScope.s1Access=true;
      }else{
        $rootScope.s1Access=false;
      };

      if(localStorageService.get('s2access')){
        $rootScope.s2Access=true;
      }else{
        $rootScope.s2Access=false;
      }
    $scope.$broadcast('scroll.refreshComplete');
  }

  $rootScope.openlink=function(url) {
    window.open(url, "_system");
  }
})
//   .run(function($ionicPlatform) {
//   $ionicPlatform.registerBackButtonAction(function (event) {
//     if($state.current.name=="app.home"){
//       navigator.app.exitApp(); //<-- remove this line to disable the exit
//     }
//     else {
//       navigator.app.backHistory();
//     }
//   }, 100);
// });
