angular.module('foods')
.controller('NavCtrl', function($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  }
})
