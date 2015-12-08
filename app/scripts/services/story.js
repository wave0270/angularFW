'use strict';

/**
 * @ngdoc story
 * @name ngApp.story.
 * @description
 * # story.
 * Factory in the ngApp.
 */
angular.module('ngApp').factory('storyService', ['$rootScope', 'configuration', 'CacheFactory', '$http', function ($rootScope, configuration, CacheFactory, $http) {
        //config user cache info
        CacheFactory('storyService', {
            maxAge: configuration.USER_CACHE_EXPIRE, // Items added to this cache expire after 1 day
            cacheFlushInterval: configuration.USER_CACHE_EXPIRE, // This cache will clear itself every hour
            deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
        });
        
        //load user cache
        var storyCache = CacheFactory.get('storyService');
        var storyService = {};
        
        /*
         * call middleware API
         * @param object params
         * @param function callback
         * @param function errorCallback
         */
//        storyService.callAPI = function (path,params, callback, errorCallback) {
//            var request = {
//                method: 'POST',
//                url: configuration.API_BASE_URL + path,
//                data: params
//            };
//            $http(request).then(function (response) {  
//                callback(response); 
//            }, function (response) {
//                errorCallback(response);
//            });
//        };
        /*
         * get classificate list
         * @param object params
         * @param function callback
         * @param function errorCallback
         */
        storyService.getClassificatelist = function (params, callback, errorCallback) {
            //will remove
            callback(); 
            return;
            var request = {
                method: 'GET',
                url: configuration.API_BASE_URL + 'classificates/search',
                data: params
            };
            $http(request).then(function (response) {  
                callback(response); 
            }, function (response) {
                errorCallback(response);
            });
        };
        /*
        * get Byline List
        * @param object params
        * @param function callback
        * @param function errorCallback
        */
        storyService.getBylineList = function (params, callback, errorCallback) {
            //will remove
            callback(); 
            return;
            var request = {
                method: 'GET',
                url: configuration.API_BASE_URL + 'bylines/search',
                data: params
            };
            $http(request).then(function (response) {  
                callback(response); 
            }, function (response) {
                errorCallback(response);
            });
        };
         /*
        * get Publisher List
        * @param object params
        * @param function callback
        * @param function errorCallback
        */
        storyService.getPublisherList = function (params, callback, errorCallback) {
            //will remove
            callback(); 
            return;
            var request = {
                method: 'GET',
                url: configuration.API_BASE_URL + 'publishers/search',
                data: params
            };
            $http(request).then(function (response) {  
                callback(response); 
            }, function (response) {
                errorCallback(response);
            });
        };
        
        /*
        * get Dateline List
        * @param object params
        * @param function callback
        * @param function errorCallback
        */
        storyService.getDatelineList = function (params, callback, errorCallback) {
            //will remove
            callback(); 
            return;
            var request = {
                method: 'GET',
                url: configuration.API_BASE_URL + 'datelines/search',
                data: params
            };
            $http(request).then(function (response) {  
                callback(response); 
            }, function (response) {
                errorCallback(response);
            });
        };

         /*
        * get Topic List
        * @param object params
        * @param function callback
        * @param function errorCallback
        */
        storyService.getTopicList = function (params, callback, errorCallback) {
            //will remove
            callback(); 
            return;
            var request = {
                method: 'GET',
                url: configuration.API_BASE_URL + 'topics/search',
                data: params
            };
            $http(request).then(function (response) {  
                callback(response); 
            }, function (response) {
                errorCallback(response);
            });
        };

         /*
        * get Rule List
        * @param object params
        * @param function callback
        * @param function errorCallback
        */
        storyService.getRuleList = function (params, callback, errorCallback) {
            //will remove
            callback(); 
            return;
            var request = {
                method: 'GET',
                url: configuration.API_BASE_URL + 'rule/search',
                data: params
            };
            $http(request).then(function (response) {  
                callback(response); 
            }, function (response) {
                errorCallback(response);
            });
        };
        /*
        * get Taxonomy List
        * @param object params
        * @param function callback
        * @param function errorCallback
        */
        storyService.getTaxonomyList = function (params, callback, errorCallback) {
            //will remove
            callback(); 
            return;
            var request = {
                method: 'GET',
                url: configuration.API_BASE_URL + 'taxonomies/search',
                data: params
            };
            $http(request).then(function (response) {  
                callback(response); 
            }, function (response) {
                errorCallback(response);
            });
        };
        /*
        * get Taxonomy List
        * @param object params
        * @param function callback
        * @param function errorCallback
        */
        storyService.saveNewStory = function (params, callback, errorCallback) {
            //will remove
            callback(); 
            return;
            var request = {
                method: 'POST',
                url: configuration.API_BASE_URL + 'stories',
                data: params
            };
            $http(request).then(function (response) {  
                callback(response); 
            }, function (response) {
                errorCallback(response);
            });
        };
            
            

        return storyService;
    }]);