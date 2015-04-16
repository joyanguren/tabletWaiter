tabletWaiter.controller('itemListController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
    $scope.items;
    $scope.itemsCount;
    $scope.loading = true;

    dataService.getAllItems().then(function (result) {
        $scope.items = result.data;
        $scope.itemsCount = result.data.length;
        $scope.loading = false;
    });

    $scope.deleteItem = function (itemId) {

        swal({
                title: "¿Estás seguro?",
                text: "Vas a borrar permanentemente el plato",
                type: "warning",
                showCancelButton: true,
                confirButtonColor: "#DD6B55",
                confirmButtonText: "Sí, ¡borralo!",
                closeOnConfirm: false
            }, function () {
                dataService.deleteItem(itemId).then(function (result) {
                    var indexToDelete = result.data;
                    removeIndex($scope.items, getIndex($scope.items, indexToDelete));
                    $scope.itemsCount--;

                    swal("Buen trabajo", "El elemento ha sido borrado correctamente", "success");
                });
            });
    };

    $scope.editItem = function (itemId) {
        $location.path("/editItem/" + itemId);
    };

    //HELPERS

    var getIndex = function (array, id) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].id == id) {
                return i;
            }
        }

        return false;
    }
    var removeIndex = function (array, index) {
        if (index != null) {
            array.splice(index, 1);
        }
    }
}]);