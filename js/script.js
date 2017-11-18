var app1 = angular.module("app1", []);
app1.controller('ctrl1',function($scope) {
    $scope.variable = "";
    $scope.addvaleur = function(e){
        $scope.variable += e;
    };
    $scope.calculer = function(){
      try {
        $scope.variable = eval($scope.variable);
      } catch (e) {
          $scope.variable = "Erreur";
      }

    };
    $scope.init = function(){
        $scope.variable = "";
    };
});
