var app = angular.module('app', ['ngRoute', 'ngDialog'])
                 .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                     $routeProvider
                         .when('/hiking.html', {
                             templateUrl: '/views/Hiking.html',
                             controller: 'mainController'
                         })
                         .when('/', {
                             templateUrl: '/views/homePage.html',
                             controller: 'mainController'
                         })
                         .otherwise({
                             templateUrl: '/views/homePage.html',
                             controller: 'mainController'
                         });

                     $locationProvider.html5Mode(true);
                }]);