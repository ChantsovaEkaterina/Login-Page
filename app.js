'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.login',
  'myApp.home',
  'myApp.translate'
])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login/login.html',
                controller: 'loginCtrl'
            })

            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })

            .otherwise({ redirectTo: '/login' });
    }])

    .run(['$rootScope', '$location', '$cookieStore',
    function ($rootScope, $location, $cookieStore) {
         // keep user logged in after page refresh
         $rootScope.globals = $cookieStore.get('globals') || {};

         $rootScope.$on('$locationChangeStart', function (event, next, current) {
             // redirect to login page if not logged in
             if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                 $location.path('/login');
             }
         });
    }]);
