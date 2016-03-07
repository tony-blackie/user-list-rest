(function() {
	"use strict";

	angular
		.module('app.users')
		.controller('UserListController', UserListController);

	function UserListController() {
		var vm = this;
		angular.extend(vm, {
			getSomeList: getSomeList
		});

		function getSomeList() {
			alert('8');
		}
	}
})();