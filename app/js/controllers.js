'use strict';

/* Controllers */
var storeApp = angular.module('storeApp', []);

storeApp.controller('GetBanners', function($scope) {
	$scope.banners = [
		{
			'image': 'http://img.prml.com.mx/ocreativas_banners/promocional_snap_n_grip.jpg',
			'link': 'detail/detail.cfm?articleId=TOOL-01'
		},
		{
			'image': 'http://img.prml.com.mx/ocreativas_banners/promocional_doggy_path.jpg',
			'link': 'detail/detail.cfm?articleId=DOG-A'
		},
		{
			'image': 'http://img.prml.com.mx/ocreativas_banners/promocional_slim_crunch.jpg',
			'link': 'detail/detail.cfm?articleId=CRUN-01'
		},
		{
			'image': 'http://img.prml.com.mx/ocreativas_banners/promocional_parrilla_doble.jpg',
			'link': 'detail/detail.cfm?articleId=COOK-02'
		}
	];
});