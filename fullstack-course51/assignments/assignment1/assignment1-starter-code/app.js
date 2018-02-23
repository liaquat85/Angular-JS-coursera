(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', function ($scope) {
$scope.name = "";

$scope.message= "";
//$scope.things = $scope.name.split(',');
$scope.feedAli = function(){
  var array2=$scope.name.split(",");
  var arraylength = array2.length ;
if (arraylength >= 4){
$scope.message = "You have entered "+ arraylength  + " Too much";
} else if (arraylength <= 3 && arraylength>1){
$scope.message =  "You have entered "+ arraylength  +" Enjoy";
}else if (arraylength ==1){
  $scope.message =  "You have entered "+ (arraylength-1)  +" Please enter data first";
}
$scope.message1=array2.length;

};
// $scope.displayLunch = function(){
// $scope.things = $scope.name.split(',');
//  };
//
function arrayToString (string){
  return string.join(", ");
//       return string;
}

});
})();
