angular.module('weatherApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/directives/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: '/directives/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: '/directives/forecast.html',
            controller: 'forecastController'
        })
}]);

