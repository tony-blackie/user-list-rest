describe('UserListService', function() {
	var UserListService,
		$http;
	beforeEach(function() {
		angular
			.mock
			.module('app.users');
		inject(function(_UserListService_, _$http_) {
			UserListService = _UserListService_;
			$http = _$http_;
		});
	});
	it('should make GET request with correct parameters', function() {
		spyOn($http, 'get');
		UserListService.getAllUsers();
		expect($http.get).toHaveBeenCalledWith('/users');
	});
});