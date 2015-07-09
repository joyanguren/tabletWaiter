tabletWaiter.controller('itemListController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
    $scope.items;
    var allItems;
    $scope.itemsCount;
    $scope.categories;
    $scope.loading = true;
    $scope.showOverlay = false;

    dataService.getCategories().then(function (result) {
        $scope.categories = result.data;
    });

    dataService.getAllItems().then(function (result) {
        $scope.items = result.data;
        allItems = result.data;
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

    $scope.filterCategory = function (categoryId) {
        $scope.showOverlay = true;
        $scope.loading = true;
        $scope.items = [];

        if (categoryId == -1) {
            $scope.items = allItems;
            $scope.itemsCount = $scope.items.length;
            $scope.loading = false;
            $scope.showOverlay = false;
            return;
        }

        angular.forEach(allItems, function (item) {
            if (item.Categories && item.Categories.match(categoryId)) {
                $scope.items.push(item);
            }
        });

        $scope.itemsCount = $scope.items.length;
        $scope.loading = false;
        $scope.showOverlay = false;
    };

    $scope.showItem = function (itemId, index)
    {
        dataService.changeHiddenStatus(itemId)
            .success(function (result) {
                $scope.items[index].Hidden = !$scope.items[index].Hidden;
            })
            .error(function (result) { })
    }

    //HELPERS

    var getIndex = function (array, id) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].Id == id) {
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