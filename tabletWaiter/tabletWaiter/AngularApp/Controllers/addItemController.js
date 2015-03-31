tabletWaiter.controller('addItemController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.itemName;
    $scope.itemDescription;

    $scope.addItem = function () {
        dataService.addItem($scope.itemName, $scope.itemDescription).then(function (resutl) {
            swal("Buen trabajo", "El elemento ha sido introducido correctamente", "success")

            $scope.itemName = "";
            $scope.itemDescription = "";
        });
    };
}]);