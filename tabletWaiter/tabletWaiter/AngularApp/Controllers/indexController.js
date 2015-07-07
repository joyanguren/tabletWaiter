tabletWaiter.controller('indexController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.tableNumber = window.sessionStorage.tableNumber;
}]);