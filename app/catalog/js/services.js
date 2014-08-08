'use strict';

/* Services */

var storeServices = angular.module('storeServices', ['ngResource']);

storeServices.factory('Catalog', ['$resource', '$location', function($resource, $location) {
  return $resource('http://localhost:8500/ofertas_creativas/com/catalog.cfc?method=getCatalog', {}, {
    query: { method: 'GET', params: $location.search(), isArray:true }
  });
}]);