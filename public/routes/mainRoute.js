var app = angular.module("app");

app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state("dashboard",{
			url:"/dashboard",
			templateUrl:"views/dashboard.html",
			controller:"mainController"
		})
		.state("about",{
			url:"/about",
			templateUrl:"views/about.html",
			controller:"mainController"
		})
		.state("home",{
			url:"/home",
			templateUrl:"views/homePage.html",
			controller:"mainController"
		}).
		state("signUp",{
			url:"/signup",
			templateUrl:"views/signup.html"
		})
		.state("signIn",{
			url:"/signin",
			templateUrl:"views/signin.html"
		});
}]);