control.controller('s2Controller',function ($scope,$rootScope,$state) {
  (function () {
    if($rootScope.s2Access==false){
      $state.go('app.home')
    }
  })()
});
