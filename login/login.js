'use strict';

angular.module('myApp.login', ['ngRoute', 'ngCookies'])

.controller('loginCtrl', ['$scope', '$location', '$rootScope', '$cookieStore', function($scope, $location, $rootScope, $cookieStore) {
    $scope.login = function() {
        $location.path('/');

        $rootScope.globals = {
            currentUser: {
                username: $scope.username,
                password: $scope.password
            }
        };
        $rootScope.user = $rootScope.globals.currentUser.username;

        $cookieStore.put('globals', $rootScope.globals);

    };
}]);