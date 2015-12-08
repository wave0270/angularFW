'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:PasswordChangeCtrl
 * @description
 * # PasswordChangeCtrl
 * Controller of the ngApp
 */
angular.module('ngApp').controller('PasswordChangeCtrl', ['$rootScope', '$scope', 'user', '$state', '$window', function ($rootScope, $scope, user, $state, $window) {
        //show view change Password
        $scope.step = 'changePassword';

        $scope.cancel = function () {
            $window.history.back();
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
                user.changePassword({
                    'oldPassword': $scope.oldPassword,
                    'newPassword': $scope.newPassword
                }, function (response) {
                    $scope.loading = false;
                    //show view chagne password success
                    $scope.step = 'success';
                }, function (resp) {
                    $scope.error = resp.message;
                    $scope.loading = false;
                });
            }
        };
    }]);