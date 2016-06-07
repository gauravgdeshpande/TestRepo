
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.cars = {
        car01 : "Ford",
        car02 : "Fiat",
        car03 : "Volvo"
    }
});
