'use strict';

angular.module('ngApp').service('APIInterceptor', ['$q', 'dataWrapper', 'configuration', '$rootScope', function ($q, dataWrapper, configuration, $rootScope) {
        var service = this;

        service.request = function (config) {
            //set request timeout 15 seconds
            config.timeout = 15000;
            
            // config header authorization
            if ($rootScope.currentUser) {
                config.headers.authorization = $rootScope.currentUser.token;
            }
            return config || $q.when(config);
        };
        service.responseError = function (rejection) {
            if(rejection.status === 404){
                rejection.data= {data: {message: '404 Not Found'}};
            }
            else if(rejection.status === 500){
                rejection.data= {data: {message: '500 Internal Server Error'}};
            }
            return $q.reject(rejection);
        };
    }]);