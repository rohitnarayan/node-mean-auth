var app = angular.module("app");

app.controller("signupController",['$scope',"signupService",function($scope,signupService){
	var vm = this;
	vm.signUpForm ={};
	// console.log(this);

	vm.formSubmit = function(){
		signupService.signupData(vm.signUpForm);
	}

	vm.reset = function() {
		vm.signUpForm.name="";
		vm.signUpForm.email="";
		vm.signUpForm.password="";
		vm.signUpForm.username="";
	}
}]);