'use strict';

/* App Module */
var storeApp = angular.module('storeApp', [
  'ngRoute',
  'storeControllers',
  'storeServices'
]);

storeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/catalog.html',
    controller: 'Catalog'
  }).when('/article/:article_id', {
    templateUrl: 'templates/detail.html',
    controller: 'ArticleDetail'
  }).otherwise({
    redirectTo: '/'
  });
}]);