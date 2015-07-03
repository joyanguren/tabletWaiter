tabletWaiter.controller('callFormController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
    $scope.simpleAlert = function () {
        dataService.sendSimpleAlert(19)
        .success(function (result) {
            swal("Llamada con éxito", "Enseguida le atenderá uno de nuestros camareros", "success")
        })
        .error(function (result) {
            console.log("error");
        });
    };
}]);