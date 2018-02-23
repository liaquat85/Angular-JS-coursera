(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Ali";
  $scope.stateOfBeing = "hungry";
$scope.sayMessage = function(){
  return "Ali like to eat health sncks at night";
};
$scope.feedAli = function(){
  $scope.stateOfBeing = "fed";
};
}

})();
