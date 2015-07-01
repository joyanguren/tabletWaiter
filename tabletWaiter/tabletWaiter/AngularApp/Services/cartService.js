tabletWaiter.factory('cartService', function ($http) {
    var cart = [];
    $scope.quantity;
    $scope.price;


    var addCart = function (item) {
        cart.push(item);
    };

    var getCart = function () {
        return cart;
    };

    var clearCart = function () {
        cart = [];
    };

    var deleteItem = function (item, index) {
        cart.splice(index, 1);
    };

    var service = {
        addCart: addCart,
        getCart: getCart,
        clearCart: clearCart,
        deleteItem: deleteItem
    };

    return service;

});