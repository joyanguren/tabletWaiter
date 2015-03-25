var tabletWaiter = angular.module('tabletWaiter', ['ngRoute']);

tabletWaiter.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'AngularApp/Templates/index.html' })
        .otherwise({ redirectTo: '/' });
}]);

tabletWaiter.run(function () {

});