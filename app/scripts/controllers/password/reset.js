'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:PasswordResetCtrl
 * @description
 * # PasswordResetCtrl
 * Controller of the ngApp
 */
angular.module('ngApp').controller('PasswordResetCtrl', ['$rootScope', '$scope', 'user', '$state', 'toaster', function ($rootScope, $scope, user, $state, toaster) {
        $scope.step = 'confirmation';
        $scope.cancel = function () {
            $state.go('login');
        };
        //when the form is submitted
        $scope.confirmationSubmit = function () {
            $scope.submitted = true;
            $scope.error = false;
            if (!$scope.frmConfirmation.$invalid) {
                if ($scope.loading) {
                    return;
                }
                $scope.loading = true;
                // call login service
                user.confirmationResetPassword({
                    'resetToken': $scope.resetToken
                }, function (response) {
                    $scope.step = 'reset';
                    $scope.loading = false;
                }, function (resp) {
                    $scope.error = resp.message;
                    $scope.loading = false;
                });
            }
        };

        //when the form is submitted
        $scope.resetPasswordSubmit = function () {
            $scope.submitted = true;
            $scope.error = false;
            if (!$scope.frmResetPassword.$invalid) {
                if ($scope.loading) {
                    return;
                }
                $scope.loading = true;
                // call login service
                user.resetPassword({
                    'resetToken': $scope.resetToken,
                    'password': $scope.password
                }, function (response) {                    
                    $scope.loading = false;
                    //show message
                    toaster.pop('success', "", $rootScope.constant.RENEW_PASSWORD_SUCCESS);
                    
                    //redirect to login page
                    $state.go('login');
                }, function (resp) {
                    $scope.error = resp.message;
                    $scope.loading = false;
                });
            }
        };
    }]);