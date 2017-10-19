(function(){

  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.answer="";
    $scope.input="";
    $scope.color = "";
    $scope.foodCheckfunc = function (){
      var temp = $scope.input.split(",");
      temp = temp.filter(Boolean);
      //console.log(temp);
      if (temp.length < 4 && temp.length > 0){
        $scope.answer = "Enjoy!";
        $scope.color = "green";
      } else if (temp.length >3){
        $scope.answer =  "Too much!";
        $scope.color = "green";
      } else if (temp.length === 0){
        $scope.answer = "Please enter data first";
        $scope.color = "red";
      }
    };
  };


})();
