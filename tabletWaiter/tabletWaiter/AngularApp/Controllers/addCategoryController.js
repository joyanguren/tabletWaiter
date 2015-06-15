tabletWaiter.controller('addCategoryController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.categoryName;

    $scope.addCategory = function () {
        dataService.addCategory($scope.categoryName).then(function (result) {
            swal("Buen trabajo", "El elemento ha sido introducido correctamente", "success")

            $scope.categoryName = "";
        });
    };

    //comment
}]);