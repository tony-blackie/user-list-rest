(function() {
    "use strict";

    angular
        .module('app', ['app.users']);
})();
(function() {
    "use strict";

    angular
        .module('app.users', ['ui.router']);
})();
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
(function() {
    "use strict";

    angular
        .module('app.users')
        .config(userListRoutes);

    userListRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function userListRoutes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/user-list.html',
                controller: 'UserListController as userListCtrl'
            });
    }
})();
//# sourceMappingURL=app.js.map
