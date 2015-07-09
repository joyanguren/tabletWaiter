tabletWaiter.controller('alertsPageController', ['$scope', '$rootScope', 'dataService', function ($scope, $rootScope, dataService) {
    $scope.alerts;

    dataService.getAlerts()
    .success(function (result) {
        $scope.alerts = result;

    })
}]);