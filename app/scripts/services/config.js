'use strict';

angular.module('services.config', []).constant('configuration', {
    IS_USE_NEW_API: false,
    API_BASE_URL: 'http://192.168.84.81:9000/',
    USER_CACHE_EXPIRE: 24 * 60 * 60 * 1000 //1 day
});