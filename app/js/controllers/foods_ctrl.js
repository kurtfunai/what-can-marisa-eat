angular.module('foods')
.controller('FoodsCtrl', function($scope, $http) {
  $scope.allergies = [];
  $scope.faqs = [];

  $http.get('/data/foods.json').success(function(data) {
    $scope.allergies = data; 
    console.log(data);
  });

  $http.get('/data/faqs.json').success(function(data) {
    $scope.faqs = data["faqs"]; 
    console.log(data);
  });
})
