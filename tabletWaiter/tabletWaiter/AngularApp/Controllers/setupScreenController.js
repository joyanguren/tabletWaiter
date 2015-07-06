tabletWaiter.controller('setupScreenController', ['$scope', '$location', function ($scope, $location) {
    $scope.showStart = true;
    $scope.tableNumber = "";
    $scope.hideStart = function () {
        $scope.showStart = false;
    }

    $scope.storageTableNumber = function () {
        window.sessionStorage.tableNumber = $scope.tableNumber;
        $location.path("/index");
    }
}]);