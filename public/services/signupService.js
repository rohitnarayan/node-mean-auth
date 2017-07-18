"use strict";

angular
	.module("app")
	.service("signupService",["$http",function($http){

		var formData = {};
		
		this.signupData = function(data) {

			formData = data;

			var jsonData = JSON.parse(JSON.stringify(formData));

			console.log(jsonData);

			// $http({method:"POST",url:"http://localhost:8080/users/register",data:jsonData})
			// 	.then(function(response) {
			// 		console.log(response);
			// 	},function(err){
			// 		console.log(err);
			// });
		}
	}]);