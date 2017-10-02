'use strict';

angular.module('myApp.home', ['ngRoute', 'ngCookies'])

.controller('homeCtrl', ['$scope', '$rootScope', '$location', '$cookieStore', function($scope, $rootScope, $location, $cookieStore) {
    $scope.logout = function() {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $location.path('/login');
    };
}]);