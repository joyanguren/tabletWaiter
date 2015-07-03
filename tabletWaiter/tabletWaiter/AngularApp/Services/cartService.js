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

    var addCart = function (id, name, price) {
        getSessionData();

        var cartItem = {
            itemId: id,
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
        window.sessionStorage.cart = "";
        window.sessionStorage.quantity = "";
        window.sessionStorage.totalPrice = "";
        window.sessionStorage.tableNumber = "";
    };

    var deleteCart = function (price, index) {
        getSessionData();

        cart.splice(index, 1);
        quantity--;
        totalPrice -= price;

        setSessionData();

    };

    var addOrder = function () {


        var url = "/api/orderItems/add";
        return $http.post(url, item);
    };

    var setSessionDataClientTableInfo = function (tableNumber) {
        window.sessionStorage.tableNumber = tableNumber;
    };

    var service = {
        addCart: addCart,
        getCartData: getCartData,
        clearCart: clearCart,
        deleteCart: deleteCart,
        setSessionDataClientTableInfo: setSessionDataClientTableInfo
    };

    return service;

});