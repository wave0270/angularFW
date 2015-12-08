'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:HomeCtrl
 * @description
 * # StoryAddCtrl
 * Controller of the ngApp
 */

angular.module('ngApp').controller('StoryAddCtrl', ['$rootScope', '$scope', 'storyService', '$state', function ($rootScope, $scope, storyService, $state) {
        angular.element(document).ready(function () {
            // checkbox show boxed-body
          $('.adv-settings input[type="checkbox"]').change(function () {
                if ($(this).is(':checked') == true) {
                    $('html, body').animate({
                        scrollTop:  $('#' + $(this).val()).offset().top - 100
                    }, 500);
                    $('#' + $(this).val()).find('.boxed-body').show();
                } else {
                    $('#' + $(this).val()).find('.boxed-body').hide();
                   
                }
          });
          
          $('.headline-check input[type="checkbox"]').change(function () {
                if ($(this).is(':checked') == true) {
                    $('#' + $(this).attr('id').slice(7)).hide();
                } else {  
                   $('#' + $(this).attr('id').slice(7)).show();
                }
          });
          //collapse:
          $(".col-left .boxed-header").click(function(){
            $(this).parent().find('div.boxed-body').toggle();
            var checkedID =$(this).parents().attr('id');
            $('#' + checkedID).prop( "checked", true );
         }); 
        });
        //call API to get data:
        $scope.classificationList = CLASSIFICATE_LIST;
        //Tiny MCE:
        $scope.tinymceOptions = {
            theme: "modern",
            plugins: [
                "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "save table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker"
            ],
            external_plugins: {
                //"moxiemanager": "/moxiemanager-php/plugin.js"
            },
            add_unload_trigger: false,
            autosave_ask_before_unload: false,
            toolbar1: "save newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
            toolbar2: "cut copy paste pastetext | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media help code | insertdatetime preview | forecolor backcolor",
            toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft | insertfile insertimage",
            menubar: false,
            toolbar_items_size: 'small',
            style_formats: [
                {title: 'Bold text', inline: 'b'},
                {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                {title: 'Example 1', inline: 'span', classes: 'example1'},
                {title: 'Example 2', inline: 'span', classes: 'example2'},
                {title: 'Table styles'},
                {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
            ],
            templates: [
                {title: 'My template 1', description: 'Some fancy template 1', content: 'My html'},
                {title: 'My template 2', description: 'Some fancy template 2', url: 'development.html'}
            ],
            spellchecker_callback: function (method, data, success) {
                if (method == "spellcheck") {
                    var words = data.match(this.getWordCharPattern());
                    var suggestions = {};

                    for (var i = 0; i < words.length; i++) {
                        suggestions[words[i]] = ["First", "second"];
                    }

                    success({words: suggestions, dictionary: true});
                }

                if (method == "addToDictionary") {
                    success();
                }
            }
        };
        //Call API:
        storyService.getClassificatelist(null, function (reponse) {
            $scope.classificationList = CLASSIFICATE_LIST;
        });
        storyService.getBylineList(null, function (reponse) {
            $scope.bylineList = BYLINE_LIST;
        });
        storyService.getPublisherList(null, function (reponse) {
            $scope.publisherList = PUBLISHER_LIST;
        });
        storyService.getDatelineList(null, function (reponse) {
            $scope.datelineList = DATELINE_LIST;
        });
        storyService.getTopicList(null, function (reponse) {
            $scope.topicList = TOPIC_LIST;
        });
        storyService.getRuleList(null, function (reponse) {
            $scope.ruleList = RULE_LIST;
        });
        storyService.getTaxonomyList(null, function (reponse) {
            $scope.taxonomyList = TAXONOMY_LIST;
        });


        //Actions:
        $scope.story = {
            "headline": "input at here ...",        
            "contentclassifications": {
                "contentclassification": {
                    "id": "6"
                },
            },
            "contentclassifications": {
                "contentclassification": {
                    // "description": "Auto",
                    "id": ""  //ok
                },
            },
            "status": "Draft",
            "bodytext": "input at here ...", 
            "abridgedinfo": {
                "graphic": {
                    // "filename": "",
                    // "imagealignment": "Left",
                    // "width": "0"
                },
                "headline": "head",
                "isclickable": "false",
                "summary": "summary t"
            },
            "summary": {
                // "graphic": {
                //     "caption": "",
                //     "filename": "",
                //     "imagealignment": "Left",
                //     "width": "0"
                // },
                "text": "input at here ..."    //ok
            },
            "associationdateline": {
                "dateline": {
                    "id": ""
                }
            },
            "geolocations": {
                "geolocation": {
                    "text": "747 3rdAve, NewYork"
                }
            },
            "relatedcontentalignment": "right",
            "seo": {
                "description": "Producer Description, WorldNow, SEO, MetaTags",
                // "includedate": "false",
                "keywords": "Producer, WorldNow, SEO, MetaTags",
                // "pageurl": "SEO Readable URL",
                "robot": "Index,Follow,Archive",
                "title": "test seo readable url"    //ok
            },
            "associatedlinks": {
                "associatedlink": [
                    {
                        "name": "5-Year-Old Wants To Be A Tractor When She Grows Up",
                        "newwindow": "true",    //default true
                        "url": "http://www.theonion.com/content/news/5_yr_old_wants_to_be_a_tractor"
                    }
                ]
            },
            "associationcontenttags": {
                "associationcontenttag": {
                    "contenttag": {
                        "headline": "Education" //notes
                    }
                }
            },
            "paywall": {
                "securitytype": "Secured"
            },
        };
        //other data?: story.rule - $story.taxonomy - story.publisher
        // <input>?: Abridged Text  -  SEO Description  - Can Affiliate assign this - Can Affiliate edit this - Date/Time Properties

        $scope.checkboxRobot = {
           indexValue : 'Index',
           follow : 'Follow',
           archive: 'Archive'
        }
        $scope.checkboxDatetime = {
            published : {
                body    : true,
                summary : true,
                override: false
            },
            updated   : {
                body    : true,
                summary : true,
                override: false
            },
            sort : 'updated'    //lastEdit, published

        }
        $scope.submit = function () {
            console.log('submit()')
            console.log($scope.checkboxRobot)
            $scope.submitted = true;
            $scope.error = false;
            //robot string:
            $scope.story.seo.robot = $scope.checkboxRobot.indexValue + ',' + $scope.checkboxRobot.follow + ',' + $scope.checkboxRobot.archive;
            
            console.log($scope.story)
            if (!$scope.StoryAddForm.$invalid) {

            }
        };
    }]);


