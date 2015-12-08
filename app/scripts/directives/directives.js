'use strict';

/**
 * @ngdoc directives
 * @name ngApp.directive:directives
 * @description
 * # directives
 */
angular.module('ngApp')
        .directive('metisMenu', function () {
            return {
                restrict: 'A',
                link: function ($rootScope, element) {
                    element.metisMenu();

                    var menuMobi = function () {
                        var windowsize = $(window).width();
                        if (windowsize < 1024)
                        {
                            $('.sidebar').addClass('menu-min');
                            $('.menu-text').hide();
                        }
                    };

                    menuMobi();
                    $(window).resize(function () { //Fires when window is resized
                        menuMobi();
                    });

                    /*Menu collapse*/
                    $('body').on('click', '.menu-collapse', function () {
                        $('.sidebar').toggleClass('menu-min');
                        $('footer').toggleClass('footer-min');
                        $('.menu-text').toggle();
                    });
                }
            };
        })
        .directive('ngCompare', function () {
            return {
                restrict: 'A',
                link: function (scope, elem, attrs, ctrl) {
                    var firstPassword = '#' + attrs.ngCompare;
                    elem.add(firstPassword).on('keyup', function () {
                        scope.$apply(function () {
                            ctrl.$setValidity('ngcompare', !(elem.val() !== $(firstPassword).val() && elem.val().length > 3));
                        });
                    });
                }
            };
        });