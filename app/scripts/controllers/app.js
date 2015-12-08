'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the ngApp
 */
angular.module('ngApp').controller('AppCtrl', ['$rootScope', '$scope', 'user', '$state', 'toaster', function ($rootScope, $scope, user, $state, toaster) {

        //logout function
        $scope.logout = function(){
            $rootScope.$broadcast('$wnSpinnerStart');
            user.logout(function () {
                $state.go('login');
                $rootScope.$broadcast('$wnSpinnerFinish');
            }, function () {
                $rootScope.$broadcast('$wnSpinnerFinish');
                toaster.pop('error', "", resp.message);
            });
        };
        $rootScope.$on('$logout', function () {
            $scope.logout();
        });
        
    }]);