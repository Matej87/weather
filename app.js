'use strict';

// http://api.openweathermap.org/data/2.5/forecast/daily?q=Gdansk&cnt=2&appid=b1caa2dca3aa00378b971211de73bdbf

var weatherApp = angular.module('weatherApp', [
    'ngRoute', 'ngResource']);


// Config
weatherApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: '/views/forecast.html',
            controller: 'forecastController'
        })
}]);

// Service

weatherApp.service('cityService', function () {
    this.city = 'Gdansk';
});


// Controlles
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {


    $scope.city = cityService.city;

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function ($scope, $resource, cityService) {
    var weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily');
    $scope.weatherResult = weatherApi.get({
            q: 'Gdansk',
            cnt: '2',
            appid: 'b1caa2dca3aa00378b971211de73bdbf'
        },
        function (res) {
            console.log(res);
            return res;
        });

    $scope.city = cityService.city;

    $scope.convertDate = function (data) {
        return new Date(data * 1000);
    };

    $scope.convertToCelsius = function (k) {
        var tempCelsius = k - 275.15;
        return tempCelsius.toFixed(1);
    }
}]);

//Services