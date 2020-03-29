control.controller('s1Controller',function ($scope,$rootScope,$state) {
  (function () {
    if($rootScope.s1Access==false){
      $state.go('app.home')
    }
  })()

  
});
