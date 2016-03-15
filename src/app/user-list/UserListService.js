(function() {
	"use strict";

	angular
		.module('app.users')
		.factory('UserListService', UserListService);

	UserListService.$inject = ['$http'];

	function UserListService($http) {
		var service = {};

		angular.extend(service, {
			getAllUsers: getAllUsers
		});

		function getAllUsers() {
			return $http.get('/users');
		}

		return service;
	}
})();