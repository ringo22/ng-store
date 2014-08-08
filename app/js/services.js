'use strict';

/* Services */

var storeServices = angular.module('storeServices', ['ngResource']);

storeServices.factory('Banner', ['$resource', function($resource) {
  return $resource('https://www.easy-shop.com/com/helpers.cfc', {}, {
    query: { method:'GET', params:{ method: 'getBanners', position: ':position' }, isArray:true }
  });
}]);