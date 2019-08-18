var myApp = angular.module('myApp', ['ngRoute', 'ngResource', 'infinite-scroll']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './pages/home.html',
            controller: 'homeController'
        })
}]);

myApp.controller('homeController', ['$scope', function ($scope) {
    $scope.tilenumber = [1, 2, 3, 4];
    $scope.paginationFunction = function () {
        var last = $scope.tilenumber[$scope.tilenumber.length - 1];
        for (var i = 1; i <= 4; i++) {
            $scope.tilenumber.push(last + i);
        }
    }
}]);

console.log("Test git")
