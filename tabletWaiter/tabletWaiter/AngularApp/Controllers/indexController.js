tabletWaiter.controller('indexController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.items;

    dataService.getAllItems().then(function (result) {
        $scope.items = result.data;
    });
}]);