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
        $scope.rangeFilter = function (val, min, max) {
            return (val.metacriticScore > games.min && val.metacriticScore < games.max);
        }
        app.filter('range', function(){
          return function(val, min, max){
            var output = [];
            output = val.metacriticScore >= min && val.metacriticScore <= max;
            return output;
          }
        });
        $scope.range = function (val, min, max) {
          var score = Math.ceil(val.metacriticScore);
            return (val.metacriticScore > score.min && val.metacriticScore < score.max);
        };
        
    });
});