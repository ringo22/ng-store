'use strict';

/* Controllers */
var storeControllers = angular.module('storeControllers', []);

storeControllers.controller('Catalog', ['$scope', '$location', 'Catalog', function($scope, $location, Catalog) {
	$scope.articles = Catalog.query($location.search());
}]);

storeControllers.controller('ArticleDetail', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $http.get('articles/articles.json').success(function(data) {
    $scope.article = data[$routeParams.article_id];
  });
}]);