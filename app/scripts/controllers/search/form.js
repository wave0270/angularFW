'use strict';

/**
 * @ngdoc function
 * @name ngApp.controller:SearchFormCtrl
 * @description # SearchFormCtrl Controller of the ngApp
 */
	angular.module('ngApp').controller('SearchFormCtrl',['$scope', '$state','constant', function ($scope, $state,constant) {
		$scope.searchobject = {};
		// watch value change event of searchFor
		$scope.$watch('searchFor', function(newValue, oldValue) {
			console.log('newValue', newValue);
			if(newValue){
				// render page follow each part
				$scope.isContentSource =true;				
				$scope.txtContent = constant.SEARCH_TXTHEADLINE_CONTAINS;
				if(newValue ==1){			
					$scope.isContentSource =false;					
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_ADMEDIA;
					$scope.txtContent = constant.SEARCH_TXTNAME_CONTAINS;
				}else if(newValue ==2){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_CATEGORY;
				}else if(newValue ==3){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_CLASSIFIEDS;
				}else if(newValue ==4){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_FORM;
				}else if(newValue ==5){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_CLIP;
				}else if(newValue ==6){
					$scope.isContentSource =false;
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_IMAGELIBRARY;
					$scope.txtContent = constant.SEARCH_TXTNAME_CONTAINS;
				}else if(newValue ==7){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_LINKPLUS;
				}else if(newValue ==8){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_POLL;
					$scope.txtContent = constant.SEARCH_TXTQUESTION_CONTAINS;
				}else if(newValue ==9){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_QUICKSIGNUP;
				}else if(newValue ==10){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_RULE;
					$scope.txtContent = constant.SEARCH_TXTNAME_CONTAINS;
				}else if(newValue ==11){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_STORY;
				}else if(newValue ==12){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_UTILITYBLOCK;
				}else if(newValue ==13){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_VIDEOASSET;
				}else if(newValue ==14){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_WEATHER;
				}else if(newValue ==15){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_WEATHERALERTS;
				}else if(newValue ==16){
					$scope.txtIdNumber = constant.SEARCH_TXTIDNUMBER_WIDGET;
				}
			}
		});
		
		
		
		$scope.listSearchFor = [{id:1,name:"Ad Media Library"},{id:2,name:"Category"},
		                        {id:3,name:"Classifieds"},{id:4,name:"Clip"},
		                        {id:5,name:"Form"},{id:6,name:"Image Library"},
		                        {id:7,name:"Links+"},{id:8,name:"Poll"},
		                        {id:9,name:"Quick Signup"},{id:10,name:"Rule"},
		                        {id:11,name:"Story"},{id:12,name:"Utility Block"},
		                        {id:13,name:"Video Asset"},{id:14,name:"Weather"},
		                        {id:15,name:"Weather Alerts"},{id:16,name:"Widgets"}];		
		$scope.searchFor = 11; //Story		
		
		$scope.listcontentSource = [{id:1,name:"WNOW"},{id:2,name:"HBO"}];
		$scope.contentSource = 1; //Story
		
		$scope.listUser = [{id:1,name:"Any User"},{id:2,name:"Admin"},{id:3,name:"WNOW"}];
		$scope.createdBy = 1; // any User
		$scope.lastModifiedBy = 1; // any User
		$scope.listContentClassification = [{id:"",name:"Choose a Tag"},{id:2,name:"About Us"},
		                                    {id:3,name:"Advertise"},{id:4,name:"Agriculture"},
		                                    {id:5,name:"Auto"},{id:6,name:"Auto - About Us"},
		                                    {id:7,name:"Auto - About Us"},{id:8,name:"Auto - Consumer"},
		                                    {id:9,name:"Auto - FSBO"},{id:10,name:"Auto - Homepage"},
		                                    {id:11,name:"Auto - Local"},{id:12,name:"Auto - Pricing"},
		                                    {id:13,name:"Auto - Promotion"},{id:14,name:"Auto - Quick Links"},
		                                    {id:15,name:"Auto - Reviews"},{id:16,name:"Auto - Search"},
		                                    {id:17,name:"Auto - Spanish"},{id:18,name:"Auto - Video"}];
		
		  
		  // clear parameter
		  $scope.clear = function () {
		    $scope.createDateTo = null;
		    $scope.createDateFrom = null;
		    $scope.modifyDateFrom = null;
		    $scope.modifyDateTo = null;
		  };
		  
		  // Disable weekend selection
		  $scope.disabled = function(date, mode) {
		    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		  };
		  // open date picker for create date from
		  $scope.openDateFrom = function($event) {
			  	$scope.status.openedDateFrom = true;
		  };
		  // open date picker for create date to
		  $scope.openDateTo = function($event) {
			    $scope.status.openedDateTo = true;
		  };
		  // open date picker for create date to
		  $scope.openModifyDateFrom = function($event) {
			    $scope.status.modifyDateFrom = true;
		  };
		  // open date picker for create date to
		  $scope.openModifyDateTo = function($event) {
			    $scope.status.modifyDateTo = true;
		  };
		  // initialization boolean 4 date picker
		  $scope.status = {
				  openedDateFrom: false,
				  openedDateTo:false,
				  modifyDateFrom :false,
				  modifyDateTo:false
				  };
		  // initialize date format
		  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		  $scope.format = $scope.formats[2];
		  
		  // function to route result page
		  $scope.resultpage = function(){
			  $state.go('searchresult',{'searchcriteria': $scope.searchobject});
		  }
		  
		  
		 
		}]);
