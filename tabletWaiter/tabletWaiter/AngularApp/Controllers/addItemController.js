tabletWaiter.controller('addItemController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.itemName;
    $scope.itemDescription;
    $scope.categories;
    $scope.categoriesSelected = [];
    $scope.base64Image;
    $scope.itemPrice;

    dataService.getCategories().then(function (result) {
        $scope.categories = result.data;
    });

    $scope.addItem = function () {
        dataService.addItem($scope.itemName, $scope.categoriesSelected.toString(), $scope.base64Image, $scope.itemPrice, $scope.itemDescription).then(function (resutl) {
            swal("Buen trabajo", "El elemento ha sido introducido correctamente", "success")

            resetForm();
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
                $scope.base64Image = 'data:image/png;base64,' + btoa(binaryString);
                $('#preview').attr('src', $scope.base64Image);
            };

            reader.readAsBinaryString(file);
        }
    };

    $scope.clickFileUpload = function () {
        $('#myFileInput').click();
    };

    //HELPERS

    var resetForm = function () {
        $scope.itemName = "";
        $scope.itemDescription = "";
        $scope.categoriesSelected = [];
        $('input[type=checkbox]').prop("checked", false);
        $scope.base64Image = "";
    };

}]);