tabletWaiter.controller('callFormController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
    $scope.simpleAlert = function () {
        dataService.sendSimpleAlert(window.sessionStorage.tableNumber)
        .success(function (result) {
            swal("Llamada con éxito", "Enseguida le atenderá uno de nuestros camareros", "success")
        })
        .error(function (result) {
            console.log("error");
        });
    };
}]);