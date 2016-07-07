var app = angular.module('myApp', []);
app.controller('GameController', function($scope, $http) {
    $http.get("http://www.cheapshark.com/api/1.0/deals")
    .then(function(response) {
        $scope.deals = response.data;

        $scope.byRange90 = function(val) {
          return (val.metacriticScore >= 90)
        }
        $scope.byRange80 = function(val) {
          return (val.metacriticScore >= 80 && val.metacriticScore <=90)
        }
        $scope.range = function (val, min, max) {
          var score = Math.ceil(val.metacriticScore);
            return (score > val.min && score < val.max);
        };
        $scope.minFilter = function (games) {
          return games.metacriticScore >= $scope.minFilter;
        };
        $scope.maxFilter = function (games) {
          return games.metacriticScore <= $scope.maxFilter;
        };    
    });
});