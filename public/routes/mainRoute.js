var app = angular.module("app");

app.config(["$urlRouterProvider","$stateProvider",function($urlRouterProvider,$stateProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state("home",{
			url:"/home",
			templateUrl:"views/home.html",
			controller:"mainController"
		})
		.state("about",{
			url:"/about",
			templateUrl:"views/about.html",
			controller:"mainController"
		})
		.state("signin",{
			url:"/signin",
			templateUrl:"views/signin.html",
			controller:"mainController"
		})
		.state("signup",{
			url:"/signup",
			templateUrl:"views/signup.html",
			controller:"mainController"
		});
}]);