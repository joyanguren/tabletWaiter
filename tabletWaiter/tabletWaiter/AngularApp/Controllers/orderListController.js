tabletWaiter.controller('orderListController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
    $scope.loading = true;


    dataService.getOrders()
        .success(function (result) {
            $scope.orders = result;
            parseOrders(result);
            $scope.loading = false;
        }).error(function () {
            swal("Something happened", "Orders cannot be shown", "error");
            $scope.loading = false;
        })


    //HELPERS
    var parseOrders = function (orders) {
        angular.forEach(orders, function (order, index) {
            $scope.orders[index].ItemsOrdered = JSON.parse(order.ItemsOrdered);
        });
    }

}])