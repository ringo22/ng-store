'use strict';

/* Controllers */
var storeControllers = angular.module('storeControllers', []);

storeControllers.controller('GetBanners', ['$scope', 'Banner', function($scope, Banner) {
	$scope.banners_H = Banner.query({ position: 'H' });
	$scope.banners_S = Banner.query({ position: 'S' });
	$scope.banners_P = Banner.query({ position: 'P' });
	$scope.banners_R = Banner.query({ position: 'R' });
}]);