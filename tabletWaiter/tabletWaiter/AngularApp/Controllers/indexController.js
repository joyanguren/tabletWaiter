tabletWaiter.controller('indexController', ['$scope', 'dataService','$rootScope', function ($scope, dataService, $rootScope) {
    $rootScope.tableNumber = window.sessionStorage.tableNumber;

}]);