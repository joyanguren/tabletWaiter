tabletWaiter.controller('itemListController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
    $scope.items;
    var allItems;
    $scope.itemsCount;
    $scope.categories;
    $scope.loading = true;

    dataService.getCategories().then(function (result) {
        $scope.categories = result.data;
    });

    dataService.getAllItems().then(function (result) {
        $scope.items = result.data;
        allItems = result.data;
        $scope.itemsCount = result.data.length;

        $scope.loading = false;
    });

    $scope.filterCategory = function (categoryId) {
        $scope.loading = true;
        $scope.items = [];

        if (categoryId == -1) {
            $scope.items = allItems;
            $scope.itemsCount = $scope.items.length;
            $scope.loading = false;
            return;
        }

        angular.forEach(allItems, function (item) {
            if (item.Categories && item.Categories.match(categoryId)) {
                $scope.items.push(item);
            }
        });

        $scope.itemsCount = $scope.items.length;
        $scope.loading = false;
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