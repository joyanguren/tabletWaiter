tabletWaiter.factory('dataService', function ($http) {
    var getItem = function (itemId) {
        var url = "/api/items/" + itemId;
        return $http.get(url);
    };

    var getAllItems = function () {
        var url = "/api/items/all";
        return $http.get(url);
    };

    var addItem = function (name, categories, image, price, description) {
        var item = {
            name: name,
            categories: categories,
            image: image,
            price: price,
            description: description
        };

        var url = "/api/items/add";
        return $http.post(url, item);
    };

    var deleteItem = function (itemId) {
        var url = "/api/items/delete/" + itemId;
        return $http.delete(url);
    };

    var editItem = function (item) {
        var url = "/api/items/edit";
        return $http.post(url, item);
    };

    var getCategories = function () {
        var url = "/api/categories/all";
        return $http.get(url);
    };

    var addCategory = function (categoryName) {
        var category = {
            name: categoryName,
        };

        var url = "/api/categories/add";
        return $http.post(url, category);
    };

    var deleteCategory = function (itemId) {
        var url = "/api/categories/delete/" + itemId;
        return $http.delete(url);
    };

    var changeHiddenStatus = function (itemId) {
        var url = "/api/items/showItem/" + itemId;
        return $http.post(url);
    };

    var getShowItems = function () {
        var url = "/api/items/showItem";
        return $http.get(url);
    };

    var sendOrders = function (cart) {
        var order = {
            tableNumber: window.sessionStorage.tableNumber,
            tableNumber: 5,
            itemsOrdered: JSON.stringify(cart)
        }

        var url = "/api/orders/add";
        return $http.post(url, order);
    }

    var sendSimpleAlert = function (tableNumber) {
        var url = "/api/alerts/addSimpleAlert/" + tableNumber;
        return $http.post(url);
    };

    var getAlerts = function () {
        var url = "/api/alerts/allSimple";
        return $http.post(url);
    };

    var service = {
        getItem: getItem,
        getAllItems: getAllItems,
        addItem: addItem,
        deleteItem: deleteItem,
        editItem: editItem,
        getCategories: getCategories,
        addCategory: addCategory,
        deleteCategory: deleteCategory,
        changeHiddenStatus: changeHiddenStatus,
        getShowItems: getShowItems,
        sendOrders: sendOrders,
        sendSimpleAlert: sendSimpleAlert,
        getAlerts: getAlerts
    };

    return service;

});
