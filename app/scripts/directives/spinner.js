'use strict';

/**
 * @ngdoc spinner
 * @name ngApp.directive:spinner
 * @description
 * # spinner
 */
angular.module('ngApp')
        .directive('wnSpinner', function () {
            return {
                template: '<div id="wn-spinner"><i></i></div>',
                restrict: 'E',
                link: function ($rootScope, element) {                    
                    /**
                     * Starts spinner
                     */
                    var start = function () {
                        element.stop().fadeIn("slow");
                    };

                    /**
                     * Stops spinner
                     */
                    var finish = function () {
                        element.stop().hide();
                        element.stop().fadeOut("slow");
                    };
                    
                    element.find('#wn-spinner').addClass('opacity');
                    finish();

                    $rootScope.$on('$wnSpinnerStart', function () {
                        start();
                    });

                    $rootScope.$on('$wnSpinnerFinish', function () {
                        finish();
                    });
                }
            };
        });