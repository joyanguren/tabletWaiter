var tabletWaiter = angular.module('tabletWaiter', ['ngRoute']);

tabletWaiter.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'AngularApp/Templates/index.html' })
        .when('/menu', { templateUrl: 'AngularApp/Templates/index.html' })
        .when('/addItem', { templateUrl: 'AngularApp/Templates/addItem.html' })
        .when('/itemList', { templateUrl: 'AngularApp/Templates/itemList.html' })
        .when('/editItem/:id', { templateUrl: 'AngularApp/Templates/editItem.html' })
        .otherwise({ redirectTo: '/' });
}]);

tabletWaiter.run(function () {

});