tabletWaiter.factory('cartService', function ($http) {
    var cart;
    var quantity;
    var totalPrice;

    var getSessionData = function () {
        if (window.sessionStorage.cart) {
            cart = JSON.parse(window.sessionStorage.cart);
            quantity = parseInt(window.sessionStorage.quantity);
            totalPrice = parseInt(window.sessionStorage.totalPrice);
        } else {
            cart = [];
            quantity = 0;
            totalPrice = 0;
        }
    }

    var setSessionData = function () {
        window.sessionStorage.cart = JSON.stringify(cart);
        window.sessionStorage.quantity = quantity;
        window.sessionStorage.totalPrice = totalPrice;
    }

    var addCart = function (name, price) {
        getSessionData();

        var cartItem = {
            name: name,
            price: price
        }

        cart.push(cartItem);
        quantity++;
        totalPrice += price;

        setSessionData();
    };

    var getCartData = function () {
        var returndata;

        if (window.sessionStorage.cart) {
            returndata = {
                cart: JSON.parse(window.sessionStorage.cart),
                quantity: window.sessionStorage.quantity,
                totalPrice: window.sessionStorage.totalPrice
            }
        } else {
            returndata = {
                cart: [],
                quantity: 0,
                totalPrice: 0
            }
        }

        return returndata;
    };

    var clearCart = function () {
        cart = [];
    };

    var deleteCart = function (price, index) {
        getSessionData();

        cart.splice(index, 1);
        quantity--;
        totalPrice -= price;

        setSessionData();

    };

    var service = {
        addCart: addCart,
        getCartData: getCartData,
        clearCart: clearCart,
        deleteCart: deleteCart
    };

    return service;

});