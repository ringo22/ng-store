'use strict';

/* jasmine specs for controllers go here */
describe('GetBanners', function(){

  beforeEach(module('storeApp'));

  it('should get "banners" model with 4 banners', inject(function($controller) {
    var scope = {},
        ctrl = $controller('GetBanners', {$scope:scope});

    expect(scope.banners.length).toBe(4);
    expect(scope.name).toBe('Bdeanners');
  }));

});