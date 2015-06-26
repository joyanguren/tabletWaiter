﻿tabletWaiter.controller('editItemController', ['$scope', '$routeParams', 'dataService', function ($scope, $routeParams, dataService) {
    $scope.item;
    $scope.categoriesSelected = [];

    var itemId = $routeParams.id;

    dataService.getItem(itemId).then(function (result) {
        $scope.item = result.data;
        $scope.categoriesSelected = fillCategoriesInt($scope.item.Categories);
    });

    dataService.getCategories()
        .success(function (result) {
            $scope.categories = result;
        }).error(function () {
            swal("Error", "Something happend", "Error");
        });

    $scope.editItem = function () {
        $scope.item.Categories = $scope.categoriesSelected.toString();

        dataService.editItem($scope.item).then(function (resutl) {
            swal("Buen trabajo", "El elemento ha sido editado correctamente", "success");
        });
    };

    $scope.fileNameChanged = function () {
        var fileInput = document.getElementById("myFileInput");

        // files is a FileList object (similar to NodeList)
        var files = fileInput.files;
        var file = files[0];

        if (files && file) {
            var reader = new FileReader();

            reader.onload = function (readerEvt) {
                var binaryString = readerEvt.target.result;
                $scope.item.Image = 'data:image/png;base64,' + btoa(binaryString);
                $('#preview').attr('src', $scope.item.Image);
            };

            reader.readAsBinaryString(file);
        }
    };

    $scope.clickFileUpload = function () {
        $('#myFileInput').click();
    };

    var fillCategoriesInt = function () {
        var categoriesString = $scope.item.Categories.split(',');
        var categoriesInt = [];

        angular.forEach(categoriesString, function (item) {
            categoriesInt.push(parseInt(item));
        });

        return categoriesInt;
    };
}]);