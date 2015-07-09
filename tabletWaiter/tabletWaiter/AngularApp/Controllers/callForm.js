tabletWaiter.controller('callFormController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
    $scope.showOverlay = false;
    $scope.simpleAlert = function () {
        $scope.showOverlay = true;

        dataService.sendSimpleAlert(window.sessionStorage.tableNumber)
        .success(function (result) {
            swal("Llamada con éxito", "Enseguida le atenderá uno de nuestros camareros", "success")
            $scope.showOverlay = false;
        })
        .error(function (result) {
            console.log("error");
            $scope.showOverlay = false;
        });
    };
}]);