tabletWaiter.controller('orderListClientController', ['$scope', '$location', 'dataService', 'cartService', function ($scope, $location, dataService, cartService) {
    $scope.items;
    var allItems;
    $scope.itemsCount;
    $scope.categories;
    $scope.loading = true;

    $scope.getOrder = function () {
        alert($scope.numberOfItems);
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