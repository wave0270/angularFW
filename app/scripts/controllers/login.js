'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngApp
 */
angular.module('ngApp').controller('LoginCtrl', ['$rootScope', '$scope', '$state', 'user', function ($rootScope, $scope, $state, user) {
        if ($rootScope.currentUser) {
            $state.go('search', {});
            return;
        }
        $scope.credentials = {
            username: 'api_infonam',
            password: 'worldnow1'
        };
        //when the form is submitted
        $scope.submit = function () {
            $scope.submitted = true;
            $scope.error = false;
            if (!$scope.frm.$invalid) {
                if ($scope.loading) {
                    return;
                }
                $scope.loading = true;
                // call login service
                user.login($scope.credentials, function (response) {
                    $scope.loading = false;
                    $state.go('search', {});
                }, function (resp) {
                    $scope.loading = false;
                    $scope.error = resp.message;
                });
            }
        };
    }]);