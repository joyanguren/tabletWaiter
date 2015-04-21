tabletWaiter.controller('categoryListController', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
    $scope.categories;
    $scope.itemsCount;
    $scope.loading = true;
    
    dataService.getCategories().then(function (result) {
        $scope.categories = result.data;
        $scope.itemsCount = result.data.length;
        $scope.loading = false;
    });

    $scope.deleteCategory = function (categoryId) {
        swal({
            title: "¿Estás seguro?",
            text: "Vas a borrar permanentemente la categoría",
            type: "warning",
            showCancelButton: true,
            confirButtonColor: "#DD6B55",
            confirmButtonText: "Sí, ¡borralo!",
            closeOnConfirm: false
        }, function () {
            dataService.deleteCategory(categoryId).then(function (result) {
                var indexToDelete = result.data;
                removeIndex($scope.categories, getIndex($scope.categories, indexToDelete));
                $scope.itemsCount--;

                swal("Buen trabajo", "El elemento ha sido borrado correctamente", "success");
            });
        });
    };

    $scope.goTo = function (url) {
        $location.path(url);
    };

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