var myRoute = angular.module('routerRoutes',['ngRoute','ui.bootstrap']);

myRoute.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/',{
		templateUrl:'/views/index/partials/home.html',
		controller:'mainController',
		controllerAs:'main'
	});
	$locationProvider.html5Mode(true);
});