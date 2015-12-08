'use strict';

angular.module('ngApp').service('dataWrapper',['x2js', function(x2js) {
    var service = this;
    service.x2js = function(data){
//        TODO
//        var data = x2js.xml_str2json(data);
        return data;
    };
    service.js2x = function(data){
        var xml = x2js.json2xml(data);
        return xml;
    };
    
    return service;
}]);