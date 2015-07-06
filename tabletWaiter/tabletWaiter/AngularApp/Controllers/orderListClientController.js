tabletWaiter.controller('orderListClientController', ['$scope', '$location', 'dataService', 'cartService', function ($scope, $location, dataService, cartService) {
    $scope.items;swal("Something happened", "Order has not saved correctly", "error");
    var allItems;
    $scope.itemsCount;
    $scope.categories;
    $scope.loading = true;
    

    $scope.sendOrders = function () {
        dataService.sendOrders($scope.cart)
        .success(function () {
            swal("Buen trabajo", "El elemento ha sido introducido correctamente", "success");
            cartService.clearCart();
            $location.path("/index");
        })
        .error(function () {
            

        });
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