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
    $scope.numberZero = function () {
        $scope.tableNumber += "0";
    }
    $scope.numberOne = function () {
        $scope.tableNumber += "1";
    }
    $scope.numberTwo = function () {
        $scope.tableNumber += "2";
    }
    $scope.numberThree = function () {
        $scope.tableNumber += "3";
    }
    $scope.numberFour = function () {
        $scope.tableNumber += "4";
    }
    $scope.numberFive = function () {
        $scope.tableNumber += "5";
    }
    $scope.numberSix = function () {
        $scope.tableNumber += "6";
    }
    $scope.numberSeven = function () {
        $scope.tableNumber += "7";
    }
    $scope.numberEight = function () {
        $scope.tableNumber += "8";
    }
    $scope.numberNine = function () {
        $scope.tableNumber += "9";
    }
    $scope.deleteNumber = function () {
        $scope.tableNumber = $scope.tableNumber.slice(0, -1);
    }
    $scope.clearNumber = function () {
        $scope.tableNumber = "";
    }
}]);