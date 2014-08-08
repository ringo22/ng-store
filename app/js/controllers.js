'use strict';

/* Controllers */
var storeControllers = angular.module('storeControllers', []);

storeControllers.controller('GetBanners', ['$scope', 'Banner', function($scope, Banner) {
	$scope.banners = Banner.query();
}]);