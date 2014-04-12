var app = angular.module('foods', ['ui.router']);
var viewsPath = 'app/views';

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('welcome', {
      url: "/",
      templateUrl: viewsPath+"/index/welcome.html",
      controller: "FoodsCtrl"
    })
    // .state('sign_up_path', {
    //   url: "/users/sign_up",
    //   templateUrl: viewsPath+"/auth/sign_up.html",
    //   controller: "AuthCtrl"
    // })
});