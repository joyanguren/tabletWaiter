var tabletWaiter = angular.module('tabletWaiter', ['ngRoute']);

tabletWaiter.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'AngularApp/Templates/index.html' })
        .when('/addItem', { templateUrl: 'AngularApp/Templates/addItem.html' })
        .otherwise({ redirectTo: '/' });
}]);

tabletWaiter.run(function () {

});