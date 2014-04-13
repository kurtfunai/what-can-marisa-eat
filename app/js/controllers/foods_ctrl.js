angular.module('foods')
.controller('FoodsCtrl', function($scope, $http) {
  $scope.allergies = [];
  $scope.faqs = [];
  $scope.recipeSites = []

  $http.get('/data/foods.json').success(function(data) {
    $scope.allergies = data; 
  });

  $http.get('/data/faqs.json').success(function(data) {
    $scope.faqs = data["faqs"]; 
  });

  $http.get('/data/recipes.json').success(function(data) {
    $scope.recipeSites = data["recipe_sites"]; 
  });
})
