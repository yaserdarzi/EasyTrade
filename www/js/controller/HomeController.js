control.controller('HomeController', function ($scope,$http,localStorageService,$rootScope,$window,$ionicPopup,$state) {
  $rootScope.buyS1 = function() {
    pay1();
  };
  $rootScope.buyS2 = function() {
    pay2();
  };
  function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  var  pay1 =function (){
    var uid = guid();

    iabRef = window.open('http://easytrade2017.ir/api/request.php?code='+uid+'', '_self', 'location=no');
    iabRef.addEventListener('loadstop',function (event) {
      if (event.url.match('http://easytrade2017.ir/api/verify.php')) {
        iabRef.close();
      }
    });
    iabRef.addEventListener('exit',function (event) {
      $http.get('http://easytrade2017.ir/api/checking.php?code='+uid).then(function(response){
        if(response.data.status==='true'){
          localStorageService.set('s1access',response.data.refId);
          $window.location.reload();

        }else{
          $ionicPopup.alert({
            title: 'خطا',
            content: response.data.msg,
            buttons:[{
              text: 'تاییــد' ,
              type :'button-positive'
            }]
          })

        }
      })
    })
  }
  var  pay2 =function (){
    var uid = guid();

    iabRef = window.open('http://easytrade2017.ir/api/requestS2.php?code='+uid+'', '_self', 'location=no');
    iabRef.addEventListener('loadstop',function (event) {
      if (event.url.match("http://easytrade2017.ir/api/verifyS2.php")) {
        iabRef.close();
      }
    });
    iabRef.addEventListener('exit',function (event) {
      $http.get('http://easytrade2017.ir/api/checking.php?code='+uid).then(function(response){
        if(response.data.status==='true'){
          localStorageService.set('s2access',response.data.refId);
          $window.location.reload();

        }else{

          $ionicPopup.alert({
            title: 'خطا !',
            content: response.data.msg,
            buttons:[{ text: 'تاییــد',type :'button-positive' }]
          })

        }
      })
    })
  }
});
