'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:ThemeCtrl
 * @description
 * # ThemeCtrl
 * Controller of the ngApp
 */
angular.module('ngApp').controller('ThemeCtrl', ['$scope', '$state', 'user', function ($scope, $state, user) {
        $scope.models = {
        selected: null,
        templates: [
            {type: "item", id: 2},
            {type: "container", id: 1, columns: [[], []]}
        ],
        dropzones: {
            "A": [
                {                    
                    "type": "head",
                    "id": 1,
                    "wgs": [
                        {
                            "type": "menu",
                            "id": "1"
                        },
                        {
                            "type": "link",
                            "id": "1"
                        }
                    ]
                },
                {
                    "type": "container",
                    "id": 1,
                    "columns": [
                        [
                        {
                            "type": "content",
                            "id": "1"
                        },
                        {
                            "type": "sidebar",
                            "id": "1"
                        }
                        ]
                    ]
                },
                {
                    "type": "footer",
                    "id": "1"
                }
            ]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
    }]);