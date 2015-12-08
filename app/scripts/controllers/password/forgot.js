'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:PasswordForgotCtrl
 * @description
 * # PasswordForgotCtrl
 * Controller of the ngApp
 */
angular.module('ngApp').controller('PasswordForgotCtrl', ['$rootScope', '$scope', 'user', '$state', 'toaster', function ($rootScope, $scope, user, $state, toaster) {
        $scope.cancel = function () {
            $state.go('login');
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
                user.forgotPassword($scope.credentials, function (response) {
                    $scope.loading = false;
                    $state.go('resetPasword', {});
                }, function (resp) {
                    $scope.error = resp.message;
                    $scope.loading = false;
                });
            }
        };
    }]);