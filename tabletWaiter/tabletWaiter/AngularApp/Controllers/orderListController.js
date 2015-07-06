tabletWaiter.controller('orderListController', ['$scope', '$location', 'dataService',  function ($scope, $location, dataService) {
    /*
    $scope.getOrders = function () {
        dataService.getOrders()
        .success(function (result) {
            $scope.orders = result.data;
            console.log(result);
        }).error(function () {
            swal("Something happened", "Order has not saved correctly", "error");
        })
    }
    */
    dataService.getOrders().then(function (result) {
        $scope.orders = result.data;
        //$scope.orderItem = result.data;
        //$scope.ordersCount = result.data.length;
        //console.log(JSON.parse(result));
        //console.log(result.data);
        //console.log("This is from scope" + $scope.orders);
    });
    
}])