var app = angular.module('universidadApp', []);

app.controller('profesorCtrl', function($scope){

	$scope.profesor = profesorData;
	
	// Una variable para guardar la copia del profesor cuando suceda algo.
	$scope.editando = {};

	$scope.mostrarCaja = false;

	// Una función dentro del scope.
	$scope.EditarProfesor = function () {
		angular.copy( $scope.profesor, $scope.editando );
		$scope.mostrarCaja = true;
	}

	$scope.GuardarProfesor = function () {
		angular.copy( $scope.editando, $scope.profesor);
		$scope.mostrarCaja = false;
	}

	$scope.CancelarProfesor = function () {
		$scope.editando = {};
		$scope.mostrarCaja = false;
	}
    

});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}


