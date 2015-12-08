'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ngApp
 */
angular.module('ngApp').controller('MainCtrl', ['$rootScope', '$scope', 'user', '$state', 'toaster', function ($rootScope, $scope, user, $state, toaster) {
        //logout function
        $rootScope.logout = function () {
            $rootScope.$broadcast('$wnSpinnerStart');
            // call logout service
            user.logout(function (response) {
                $state.go('login', {});
            }, function (resp) {
                toaster.pop('error', "", resp.message);
            });
        };
        $rootScope.$on('$logout', function () {
            $rootScope.logout();
        });
    }]);