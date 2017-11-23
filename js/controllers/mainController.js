angular.module('listaCompras')

.controller('mainController', function($scope){
  
  $scope.items = [];

  $scope.addItem = function(){
    
    $scope.items.push($scope.itemName);
    $scope.itemName = '';
  }

  $scope.removeItem = function(index){
    $scope.items.splice(index, 1);
  }
}); 