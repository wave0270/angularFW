/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//temp Data, will be remove
var TMP_STORY = {
        "affiliateid": "6", 
        // "headline": "unit test story create with default SEO",  //ok
        // "status": "Draft",
        "abridgedinfo": {
            "graphic": {
                "filename": "",
                "imagealignment": "Left",
                "width": "0"
            },
            "headline": "",
            "isclickable": "false",
            "summary": "summary title"
        },
        // "associatedlinks": {
        //     "associatedlink": [
        //         {
        //             "name": "5-Year-Old Wants To Be A Tractor When She Grows Up", //ok
        //             "newwindow": "true",    //ok    
        //             "url": "http://www.theonion.com/content/news/5_yr_old_wants_to_be_a_tractor"    //ok
        //         },
        //         {
        //             "name": "Bill Clinton Sadly Folds First Lady Dress Back Into Box",
        //             "newwindow": "false",
        //             "url": "http://www.theonion.com/content/news/bill_clinton_sadly_folds_first"
        //         }
        //     ]
        // },
        // "associationbylines": {
        //     "associationbyline": {
        //         "bylineuser": {
        //             "id": "27522"   //ok
        //         },
        //         "prefix": "Reported By" //ok
        //     }
        // },
        // "associationcontenttags": {
        //     "associationcontenttag": {
        //         "contenttag": {
        //             "headline": "Education" //ok
        //         }
        //     }
        // },
        // "associationdateline": {
        //     "dateline": {
        //         "id": "5"   //ok
        //     }
        // },
        "bodygraphics": "",
        // "bodytext": "unit test story create",   //ok
        "brandinggraphic": {
            "caption": "",
            "filename": ""
        },
        "comments": "",
        // "contentclassifications": {
        //     "contentclassification": {
        //         // "description": "Auto",
        //         "id": "13"  //ok
        //     },
        //     // "__text": "\n\nCopyright 2000-2015 Worldnow 33 / 156 Confidential and Proprietary\n\n \n\n\n"
        // },
        // "geolocations": {
        //     "geolocation": {
        //         "text": "747 3rdAve, NewYork"   //ok
        //     }
        // },
        "headergraphic": {
            "caption": "",
            "filename": "",
            "imagealignment": "Left",
            "width": "0"
        },
        "options": "",
        // "paywall": {
        //     "securitytype": "Secured" //ok
        // },
        // "relatedcontentalignment": "Left",
        "seo": {
            "description": "Producer Description, WorldNow, SEO, MetaTags", //ok
            "includedate": "false",
            "keywords": "Producer, WorldNow, SEO, MetaTags",    //ok
            "pageurl": "SEO Readable URL",
            "robot": "Index,Follow,Archive",
            "title": "test seo readable url"    //ok
        },
        "summary": {
            "graphic": {
                "caption": "",
                "filename": "",
                "imagealignment": "Left",
                "width": "0"
            },
            "text": "unit test story create"    //ok
        },
        // "_xmlns": "http://api.worldnow.com/cms",
        // "_xmlns:i": "http://www.w3.org/2001/XMLSchema-instance",
        // "__text": "\n\n\n\n\nCopyright 2000-2015 Worldnow 32 / 156 Confidential and Proprietary\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n"
    
}

var CLASSIFICATE_LIST = [
    {
        "description": "Business",
        "id": "6"
    },
    {
        "description": "Direct Mail",
        "id": "19"
    },
    {
        "description": "Entertainment",
        "id": "8"
    },
    {
        "description": "High School Sports",
        "id": "101"
    },
    {
        "description": "Political - Democrat",
        "id": "136"
    }
];

var BYLINE_LIST = [
    {
        "id": "27522",
        "status": "Active",
        "title": "Staff Reporter"
    },
    {
        "firstname": "John",
        "id": "27524",
        "lastname": "Miller",
        "status": "Active",
        "title": "Reporter"
    }
]

//dump
var TOPIC_LIST = [
    {
        "id"    : "123",
        "title" :   "health, surgery, plastic surgery"
    },
    {
        "id"    : "12783",
        "title" :   "sports"
    },
    {
        "id"    : "1223",
        "title" :   "woman"
    }
];


var RULE_LIST = [
    {
        "id"    : "6757",
        "title" : "Save"
    },
    {
        "id"    : "86757",
        "title" : "Save & Finish"
    },
    {
        "id"    : "86757",
        "title" : "Save & Assign to Category"
    },
    {
        "id"    : "86757",
        "title" : "Save & Assign to Story "
    },
    {
        "id"    : "86757",
        "title" : "Save & Assign to Clip"
    },
    {
        "id"    : "86757",
        "title" : "Save & Send as Email"
    }
];

var TAXONOMY_LIST = [
    {
        "id"    : "657",
        "title" : "Automation 445758"
    },
    {
        "id"    : "6547",
        "title" : "Automation 4554"
    }
];
var PUBLISHER_LIST = [
    {
        "id"    : "657",
        "name" : "Johny"
    },
    {
        "id"    : "6457",
        "name" : "Mary"
    },
    {
        "id"    : "6547",
        "name" : "Mike"
    }
];
var DATELINE_LIST = [
    {
        "id"    : "5",
        "title" :   "health, surgery, plastic surgery"
    },
    {
        "id"    : "12783",
        "title" :   "sports"
    },
    {
        "id"    : "1223",
        "title" :   "woman"
    }
];

// Category:
var TMP_CATEGORY = {
        "affiliateid": "6",
        "audittrail": {
            "createdby": "14769",
            "creationdate": "2008-06-02T10:03:28.353",
            "lasteditedby": "14769",
            "lastediteddate": "2008-06-02T10:18:07.023"
        },
        "headline": "Escaped Caterpillar On Rampage Through City",
        "id": "105542",
        "status": "Draft",
        "abridgedinfo": {
            "graphic": {
                "imagealignment": "Left",
                "filename": "",
                "size": "30"
            },
            "headline": "Escaped Caterpillar On Rampage Through City (breaking \n\nnews)",
            "isclickable": "true",
            "summary": "Test 2<br />"
        },

        "brandingimageinformation": {
            "caption": "",
            "filename": ""
        },
        "contentclassifications": {
            "contentclassification": [
                {
                    "description": "Business",
                    "id": "6"
                },
                {
                    "description": "Direct Mail",
                    "id": "19"
                },
                {
                    "description": "Entertainment",
                    "id": "8"
                },
                {
                    "description": "High School Sports",
                    "id": "101"
                },
                {
                    "description": "Political - Democrat",
                    "id": "136"
                }
            ]
        },
        "controlled": "false",
        "defaultcontentclassification": {
            "description": "High School Sports",
            "id": "101"
        },
        "headerimageinformation": {
            "caption": "",
            "imagealignment": "Left",
            "filename": "",
            "size": "90"
        },
        "headertext": "Residents Advised To Wear Socks As Precaution",
        "mobilesponsor": {
            "headline": "",
            "link": ""
        },
        "paywall": {
            "securitytype": "Unsecured"
        },
        "seo": {
            "description": "Worldnow, wnow, producer",
            "keywords": "Worldnow, wnow, producer",
            "robot": "Index,Follow,NoArchive",
            "includedate": "false",
            "pageurl": "readable-category",
            "title": "readable category"
        },
        "sectiontitle": "",
        "summary": {
            "graphic": {
                "caption": "",
                "imagealignment": "Left",
                "filename": "",
                "size": "50"
            },
            "text": "COLUMBUS, OH—A ravenous caterpillar escaped from captivity today, \n\nwreaking havoc as it devoured everything in its sight and carved a half-\ncentimeter path of destruction across the city."
        },
        "_xmlns": "http://api.worldnow.com/cms",
        "_xmlns:i": "http://www.w3.org/2001/XMLSchema-instance"
    
}
