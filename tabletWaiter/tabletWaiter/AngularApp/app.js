var tabletWaiter = angular.module('tabletWaiter', ['ngRoute']);

tabletWaiter.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'AngularApp/Templates/index.html' })
        .when('/menu', { templateUrl: 'AngularApp/Templates/index.html' })
        .when('/addItem', { templateUrl: 'AngularApp/Templates/addItem.html' })
        .when('/itemList', { templateUrl: 'AngularApp/Templates/itemList.html' })
        .otherwise({ redirectTo: '/' });
}]);

tabletWaiter.run(function () {

});