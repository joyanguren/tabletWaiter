tabletWaiter.controller('addItemController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.itemName;
    $scope.itemDescription;

    $scope.addItem = function () {
        dataService.addItem($scope.itemName, $scope.itemDescription).then(function (resutl) {
            alert("item Registrado correctamente");

            $scope.itemName = "";
            $scope.itemDescription = "";
        });
    };
}]);