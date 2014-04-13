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
});