'use strict';

/* App Module */
var storeApp = angular.module('storeApp', [
  'ngRoute',
  'storeControllers',
  'storeServices'
]);

storeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/home.html',
    controller: 'GetBanners'
  }).otherwise({
    redirectTo: '/'
  });
}]);
