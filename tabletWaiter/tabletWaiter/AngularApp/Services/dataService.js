tabletWaiter.factory('dataService', function ($http) {
    var getAllItems = function () {
        var url = "/api/items/all";
        return $http.get(url);
    };

    var service = {
        getAllItems: getAllItems
    };

    return service;

});
