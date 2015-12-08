'use strict';

/**
 * @ngdoc user
 * @name ngApp.user.
 * @description
 * # user.
 * Factory in the ngApp.
 */
angular.module('ngApp').factory('user', ['$rootScope', 'configuration', 'CacheFactory', '$http', function ($rootScope, configuration, CacheFactory, $http) {
        //config user cache info
        CacheFactory('user', {
            maxAge: configuration.USER_CACHE_EXPIRE, // Items added to this cache expire after 1 day
            cacheFlushInterval: configuration.USER_CACHE_EXPIRE, // This cache will clear itself every hour
            deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
        });

        //load user cache
        var userCache = CacheFactory.get('user');
        var userService = {};

        /*
         * update user to cache
         * @param {type} resp
         * @returns {undefined}
         */
        userService.updateCurrentUser = function (response) {
            $rootScope.currentUser = response;
            userCache.put('info', response);
        };

        // clear cache after logged out
        userService.clearUserCache = function () {
            delete $rootScope.currentUser;
            userCache.remove('info');
        };

        // check if the user is authenticated
        userService.isAuthenticated = function () {
            if (userCache.get('info')) {
                $rootScope.currentUser = userCache.get('info');
                return true;
            }
            return false;
        };

        // get current user info from Local Storage
        userService.userInfo = function () {
            var userInfo = null;
            if (userCache.get('info')) {
                userInfo = userCache.get('info');
            }
            return userInfo;
        };

        /*
         * User authentication
         * @param object params
         * @param function callback
         * @param function errorCallback
         */
        userService.login = function (params, callback, errorCallback) {
            var request = {
                method: 'POST',
                url: configuration.API_BASE_URL + 'permissions/login',
                data: params
            };
            $http(request).then(function (response) {
                userService.updateCurrentUser(response.data.data);
                callback(response.data.data);
            }, function (response) {
                errorCallback(response.data.data);
            });
        };

        /*
         * User logout
         * @param function callback
         * @param function errorCallback
         */
        userService.logout = function (callback, errorCallback) {
            userService.clearUserCache();
            callback();
        };

        /*
         * User forgot Password
         * @param object params
         * @param function callback
         * @param function errorCallback
         */
        userService.forgotPassword = function (params, callback, errorCallback) {
            var request = {
                method: 'POST',
                url: configuration.API_BASE_URL + 'authentication/forgotpassword'
            };

            $http(request).then(function (response) {
                callback(response.data.data);
            }, function (response) {
                errorCallback(response.data.data);
            });
        };

        /*
         * User reset password confirmation
         * @param object params
         * @param function callback
         * @param function errorCallback
         */
        userService.confirmationResetPassword = function (params, callback, errorCallback) {
            var request = {
                method: 'POST',
                url: configuration.API_BASE_URL + 'authentication/forgotpassword/confirmationtoken'
            };

            $http(request).then(function (response) {
                callback(response.data.data);
            }, function (response) {
                errorCallback(response.data.data);
            });
        };

        /*
         * User reset password
         * @param object params
         * @param function callback
         * @param function errorCallback
         */
        userService.resetPassword = function (params, callback, errorCallback) {
            var request = {
                method: 'POST',
                url: configuration.API_BASE_URL + 'authentication/resetpassword'
            };

            $http(request).then(function (response) {
                callback(response.data.data);
            }, function (response) {
                errorCallback(response.data.data);
            });
        };        
        
        /*
         * User change Password
         * @param object params
         * @param function callback
         * @param function errorCallback
         */
        userService.changePassword = function (params, callback, errorCallback) {
            var request = {
                method: 'POST',
                url: configuration.API_BASE_URL + 'authentication/changepassword'
            };

            $http(request).then(function (response) {
                callback(response.data.data);
            }, function (response) {
                errorCallback(response.data.data);
            });
        };

        return userService;
    }]);