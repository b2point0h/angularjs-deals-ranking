var app = angular.module('myApp', []);
app.controller('GameController', function($scope, $http) {
    $http.get("http://www.cheapshark.com/api/1.0/deals")
    .then(function(response) {
        $scope.deals = response.data;
    });
});