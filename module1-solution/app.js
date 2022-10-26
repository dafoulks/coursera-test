(function () {
'use strict';

angular.module('module1Solution', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {

  $scope.foodItems = "";
  $scope.foodCount = 0;
  $scope.foodMsg = ""

  $scope.sayMessage = function () {

      if ($scope.foodCount > 0 && $scope.foodCount < 4) {
        $scope.foodMsg = "Enjoy!"
      } else {
        $scope.foodMsg = "Too much!"
      }
    
    

  };

  $scope.countFood = function () {
    if ($scope.foodItems) {
      var totalFoodCount = calculateFoodCount($scope.foodItems);

      $scope.foodCount = totalFoodCount;

      return $scope.sayMessage()
    } else {
      $scope.foodMsg = "Please enter data first"
    }
  };

  function calculateFoodCount(string) {
    var totalFoodCount = 0;

    var foods = string.split(',')
    totalFoodCount = foods.length
  
    return totalFoodCount;
  }
  
  
}

})();


