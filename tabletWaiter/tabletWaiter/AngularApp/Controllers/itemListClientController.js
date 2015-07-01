tabletWaiter.controller('itemListClientController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
    $scope.items;
    var allItems;
    $scope.itemsCount;
    $scope.categories;
    $scope.loading = true;

    $scope.cart = [];
    $scope.totalPrice = 0;
    $scope.numberOfItems = 0;

    dataService.getCategories().then(function (result) {
        $scope.categories = result.data;
    });

    dataService.getShowItems().then(function (result) {
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

    $scope.addItem = function (item) {
        $scope.cart.push(item);
        $scope.totalPrice += item.Price;
        $scope.numberOfItems++;
    };

    $scope.deleteItem = function (item, index) {
        $scope.cart.splice(index, 1);
        $scope.totalPrice -= item.Price;
        $scope.numberOfItems--;
    }
}]);