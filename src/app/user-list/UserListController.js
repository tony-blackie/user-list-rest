(function() {
	"use strict";

	angular
		.module('app.users')
		.controller('UserListController', UserListController);

	UserListController.$inject = ['UserListService'];

	function UserListController(UserListService) {
		var vm = this;
		angular.extend(vm, {
			getAllUsers: getAllUsers
		});


		function getAllUsers() {
			UserListService.getAllUsers().then(function(users) {
				console.log(users.data);
			});
		}
	}
})();