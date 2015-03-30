tabletWaiter.factory('dataService', function ($http) {
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

    var service = {
        getAllItems: getAllItems,
        addItem: addItem
    };

    return service;

});
