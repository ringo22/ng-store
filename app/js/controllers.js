'use strict';

/* Controllers */
var storeControllers = angular.module('storeControllers', []);

storeControllers.controller('GetBanners', ['$scope', '$http', function($scope, $http) {
	$scope.name = "banners";

	$http.get('banners/promos.json').success(function(data) {
    $scope.banners = data;
  });
}]);