/// <reference path="Templates/itemListClient.html" />
var tabletWaiter = angular.module('tabletWaiter', ['ngRoute', 'checklist-model']);

tabletWaiter.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'AngularApp/Templates/index.html' })
        .when('/menu', { templateUrl: 'AngularApp/Templates/index.html' })
        .when('/addItem', { templateUrl: 'AngularApp/Templates/addItem.html' })
        .when('/itemList', { templateUrl: 'AngularApp/Templates/itemList.html' })
        .when('/editItem/:id', { templateUrl: 'AngularApp/Templates/editItem.html' })
        .when('/categoryList', { templateUrl: 'AngularApp/Templates/categoryList.html' })
        .when('/addCategory', { templateUrl: 'AngularApp/Templates/addCategory.html' })
        .when('/itemListClient', { templateUrl: 'AngularApp/Templates/itemListClient.html' })
        .when('/call', { templateUrl: 'AngularApp/Templates/callForm.html' })
        .when('/orderListClient', { templateUrl: 'AngularApp/Templates/orderListClient.html' })
        .when('/alerts', { templateUrl: 'AngularApp/Templates/alertsPage.html' })
        .otherwise({ redirectTo: '/' });
}]);

tabletWaiter.run(function ($rootScope) {
    $rootScope.alerts = [];
});


