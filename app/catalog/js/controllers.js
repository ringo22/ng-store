'use strict';

/* Controllers */
var storeControllers = angular.module('storeControllers', []);

storeControllers.controller('Catalog', ['$scope', '$http', function($scope, $http) {
  $http.get('articles/articles.json').success(function(data) {
    $scope.articles = data;
  });
}]);

storeControllers.controller('ArticleDetail', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $http.get('articles/articles.json').success(function(data) {
    $scope.article = data[$routeParams.article_id];
  });
}]);