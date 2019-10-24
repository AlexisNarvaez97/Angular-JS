(function() {
  var app = angular.module("universidadApp", []);

  app.controller("listadorCtrl", [
    "$scope",
    function($scope) {
      $scope.listado = ["Fernando", "Melisa", "Alexis", "Gerardo"];

      $scope.listaProfesores = {
        profesores: [
			{
				nombre: 'Alexis Narvaez',
				edad: 29,
				clase: 'PEE'
			},
			{
				nombre: 'Gerardo Cetzal',
				edad: 21,
				clase: 'GAY'
			},
			{
				nombre: 'Raul Ramirez',
				edad: 23,
				clase: 'Math'
			}
		]
      };
    }
  ]);
})();
