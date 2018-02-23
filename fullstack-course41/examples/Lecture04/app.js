(function() {

'use strict'	
angular.module("myFirstApp",[])
.controller('MyFirstController',function($scope){
$scope.name = "Ali";
$scope.sayHello = function(){
	return "Hello Coursera";
}

});	
})();