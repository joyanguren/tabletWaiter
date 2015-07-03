tabletWaiter.controller('setupScreenController', ['$scope', '$location', 'dataService', 'cartService', function ($scope, $location, dataService, cartService) {
    $scope.tryme2 = true;
    $scope.tryme3 = "";
    $scope.tryme = function () {
        $scope.tryme2 = false;
    }

    $scope.tryme4 = function () {
        cartService.setSessionDataClientTableInfo($scope.tryme3);
        $location.path("/");
    }
}]);