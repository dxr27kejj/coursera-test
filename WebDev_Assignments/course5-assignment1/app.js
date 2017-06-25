(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.separator = /\s*,\s*/;
    $scope.input = "";
    $scope.output = "";
    $scope.valid = "false";

    $scope.onClick = function () {
    	if($scope.input == 0) $scope.output = "Please enter data first";
    	else {
    		$scope.valid = "true";
    		var num = $scope.input.split($scope.separator).length;
    		if (num > 3) $scope.output = "Too much!";
    		else $scope.output = "Enjoy!";

    	}
    }
}

})();
