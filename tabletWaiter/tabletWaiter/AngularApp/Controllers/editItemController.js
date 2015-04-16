tabletWaiter.controller('editItemController', ['$scope', '$routeParams', 'dataService', function ($scope, $routeParams, dataService) {
    $scope.item;

    var itemId = $routeParams.id;

    dataService.getItem(itemId).then(function (result) {
        $scope.item = result.data;
    });

    $scope.editItem = function () {
        dataService.editItem($scope.item).then(function (resutl) {
            swal("Buen trabajo", "El elemento ha sido editado correctamente", "success");
        });
    };
}]);