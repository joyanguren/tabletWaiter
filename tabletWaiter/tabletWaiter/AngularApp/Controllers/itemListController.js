tabletWaiter.controller('itemListController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.items;
    $scope.loading = true;

    dataService.getAllItems().then(function (result) {
        $scope.items = result.data;
        $scope.loading = false;
    });
}]);