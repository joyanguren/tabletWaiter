tabletWaiter.controller('orderListClientController', ['$scope', '$location', 'dataService', 'cartService', function ($scope, $location, dataService, cartService) {
    $scope.items;
    var allItems;
    $scope.itemsCount;
    $scope.categories;
    $scope.loading = true;

    dataService.getCategories().then(function (result) {
        $scope.categories = result.data;
    });

    dataService.getShowItems().then(function (result) {
        $scope.items = result.data;
        allItems = result.data;
        $scope.itemsCount = result.data.length;

        $scope.loading = false;
    });

    var getOrder = function () {
        alert(cartItem.name);
    };

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

    $scope.addItem = function (name, price) {
        cartService.addCart(name, price);

        updateCartData();
    };

    $scope.deleteItem = function (price, index) {
        cartService.deleteCart(price, index);

        updateCartData();
    }


    //HELPERS
    var updateCartData = function () {
        var cartData = cartService.getCartData();

        $scope.cart = cartData.cart;
        $scope.totalPrice = cartData.totalPrice;
        $scope.numberOfItems = cartData.quantity;
    }


    //INITIALIZERS
    updateCartData();
}]);