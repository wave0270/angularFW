'use strict';

/**
 * @ngdoc overview
 * @name ngApp
 * @description
 * # ngApp
 *
 * Main module of the application.
 */
angular.module('ngApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'services.config',
    'LocalStorageModule',
    'angular-cache',
    'angular-ladda',
    'cb.x2js',
    'dndLists',
	'ui.bootstrap',
    'toaster',
    'ui.select',
    'ui.select2',
    'ui.tinymce'
]).config(['$urlRouterProvider', '$stateProvider', '$httpProvider', 'CacheFactoryProvider', function ($urlRouterProvider, $stateProvider, $httpProvider, CacheFactoryProvider) {
        //Cache Factory Provider Configuration
        angular.extend(CacheFactoryProvider.defaults, {
            storageMode: 'localStorage' // memory, localStorage, sessionStorage
        });

        //push the interceptor
        $httpProvider.interceptors.push('APIInterceptor');

        $urlRouterProvider.otherwise('/search');
        $stateProvider
                .state('login', {
                    url: '/login?url',
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl',
                    bodyClass: 'wp-wpLogin'
                })
                .state('forgotPassword', {
                    url: '/forgot-password',
                    templateUrl: 'views/password/forgot.html',
                    controller: 'PasswordForgotCtrl',
                    bodyClass: 'wp-wpLogin'
                })
                .state('resetPasword', {
                    url: '/reset-pasword',
                    templateUrl: 'views/password/reset.html',
                    controller: 'PasswordResetCtrl',
                    bodyClass: 'wp-wpLogin'
                })
                .state('changePassword', {
                    url: '/change-password',
                    templateUrl: 'views/password/change.html',
                    controller: 'PasswordChangeCtrl',
                    bodyClass: 'wp-wpLogin'
                })
                .state('search', {
                    url: '/search',
                    templateUrl: 'views/search/form.html',
                    controller: 'SearchFormCtrl',
                    bodyClass: 'wp-dashboard'
                })
                .state('searchresult', {
                    url: '/searchresult?searchcriteria',
                    templateUrl: 'views/search/searchresult.html',
                    controller: 'SearchResultCtrl',
                    bodyClass: 'wp-dashboard'
                })
                .state('imageLibrary', {
                    url: '/image/library',
                    templateUrl: 'views/image/library.html',
                    controller: 'ImageLibraryCtrl',
                    bodyClass: 'wp-dashboard'
                })
                .state('storyAdd', {
                    url: '/story/add',
                    templateUrl: 'views/story/add.html',
                    controller: 'StoryAddCtrl',
                    bodyClass: 'wp-dashboard'
                })
    }]).run(['$rootScope', '$state', 'user', 'constant', function ($rootScope, $state, user, constant) {
        $rootScope.constant = constant;
        $rootScope.$on("$stateChangeSuccess", function () {
            //auto scroll to top page
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            
            //check user authenticaion
            $rootScope.stateNoNeeedAuthentication = [
                'login', 'forgotPassword', 'resetPasword' , 'storyAdd'
            ];
            if ($rootScope.stateNoNeeedAuthentication.indexOf($state.current.name) === -1 && !user.isAuthenticated()) {
                $state.go('login');
                return;
            }

            //set body class
            $rootScope.bodyClass = $state.current.bodyClass;

            //set page title
            $rootScope.title = $rootScope.constant.TITLE[$state.current.name];

            //set show/hide sidebar
            $rootScope.stateNoNeeedSidebar = [
                'login', 'forgotPassword', 'resetPasword'
            ];
            $rootScope.isShowSidebar = $rootScope.stateNoNeeedSidebar.indexOf($state.current.name) === -1;
        });
    }]);