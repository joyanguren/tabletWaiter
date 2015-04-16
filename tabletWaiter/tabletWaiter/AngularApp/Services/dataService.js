tabletWaiter.factory('dataService', function ($http) {
    var getItem = function (itemId) {
        var url = "/api/items/" + itemId;
        return $http.get(url);
    };

    var getAllItems = function () {
        var url = "/api/items/all";
        return $http.get(url);
    };

    var addItem = function (name, description) {
        var item = {
            name: name,
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

    var service = {
        getItem: getItem,
        getAllItems: getAllItems,
        addItem: addItem,
        deleteItem: deleteItem,
        editItem: editItem
    };

    return service;

});
