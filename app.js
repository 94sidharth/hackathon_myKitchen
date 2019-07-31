var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './pages/home.html',
            controller: 'homeController'
        })
}]);

myApp.controller('homeController', [function () {
    console.log("inside controller")
}]);