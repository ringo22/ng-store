'use strict';

/* Controllers */
var storeApp = angular.module('storeApp', []);

storeApp.controller('Catalog', function($scope) {
	$scope.articles = [
		{ 
			"sku":"FTAB-01",
			"score": 0,
			"description":"FUNDA-TECLADO PARA TABLET 7\"",
			"image":"http://img.prml.com.mx/ocreativas_img/FUNDA TECLADO 300.jpg",
			"price":99
		},
		{
			"sku":"PUSH-01",
			"score": 0,
			"description": "APARATO DE EJERCICIO PARA TONIFICAR PECHO, ESPALDA Y ABDOMEN",
			"image": "http://img.prml.com.mx/ocreativas_img/PUSH STEEL 300.jpg",
			"price": 999
		},
		{
			"sku": "TAB7-07N",
			"score":3,
			"description": "TABLET 7\" XPX DUAL CORE, HDMI, 512 RAM, MARCO NEGRO",
			"image": "http://img.prml.com.mx/ocreativas_img/TABLET XPX 300.jpg",
			"price": 1249
		},
		{
			"sku": "MANG-02",
			"score": 0,
			"description": "HOXE MANGUERA EXPANDIBLE 22.86 METROS",
			"image": "http://img.prml.com.mx/ocreativas_img/HOXE22 300.jpg",
			"price": 399
		},
		{
			"sku": "PUSH-01",
			"score": 0,
			"description": "APARATO DE EJERCICIO PARA TONIFICAR PECHO, ESPALDA Y ABDOMEN",
			"image": "http://img.prml.com.mx/ocreativas_img/PUSH STEEL 300.jpg",
			"price": 999
		},
		{
			"sku": "PROY-05",
			"score": 0,
			"description": "MINIPROYECTOR LIBITIUM KALEIDOS",
			"image": "http://img.prml.com.mx/ocreativas_img/MINI PROYECTOR 300.jpg",
			"price": 1149
		},
		{
			"sku": "TWIZ-01",
			"score": 0,
			"description": "MY TWIZZE DEPILADORA ELÉCTRICA",
			"image": "http://img.prml.com.mx/ocreativas_img/MYTWI 300.jpg",
			"price": 249
		},
		{
			"sku": "COOK-01",
			"score": 0,
			"description": "PARRILLA DE INDUCCIÓN MAGNETICA INDIVIDUAL",
			"image": "http://img.prml.com.mx/ocreativas_img/PARRILLA SENCILLA 3001.jpg",
			"price":1199
		},
		{
			"sku": "ENCH-01",
			"score": 0,
			"description": "MAGIC LEVERAG RISADOR DE CABELLO",
			"image": "http://img.prml.com.mx/ocreativas_img/MAGIC LEVER 300.jpg",
			"price":299
		},
		{
			"sku": "ENCH-01",
			"score": 0,
			"description": "MAGIC LEVERAG RISADOR DE CABELLO",
			"image": "http://img.prml.com.mx/ocreativas_img/MAGIC LEVER 300.jpg",
			"price":299
		}
	];

	$scope.orders = 'description';
});