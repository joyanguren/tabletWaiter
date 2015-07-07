tabletWaiter.controller('setupScreenController', ['$scope', '$location', function ($scope, $location) {
    $scope.showStart = true;
    $scope.tableNumber = "";
    $scope.hideStart = function () {
        $scope.showStart = false;
    }

    $scope.storageTableNumber = function () {
        if ($scope.tableNumber) {
            window.sessionStorage.tableNumber = $scope.tableNumber;
            $location.path("/index");
        } else {
            swal("No data", "You have to introduce table number", "error");
        }
    }

    $scope.addNumber = function (numberToAdd) {
        $scope.tableNumber += numberToAdd;
    }

    $scope.deleteNumber = function () {
        $scope.tableNumber = $scope.tableNumber.slice(0, -1);
    }

    $scope.clearNumber = function () {
        $scope.tableNumber = "";
    }
}]);