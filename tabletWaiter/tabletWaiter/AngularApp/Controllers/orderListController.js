tabletWaiter.controller('orderListController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
    dataService.getOrders()
        .success(function (result) {
            $scope.orders = result;
            parseOrders(result);
        }).error(function () {
            swal("Something happened", "Orders cannot be shown", "error");
        })


    //HELPERS
    var parseOrders = function (orders) {
        angular.forEach(orders, function (order, index) {
            $scope.orders[index].ItemsOrdered = JSON.parse(order.ItemsOrdered);
        });
    }

}])