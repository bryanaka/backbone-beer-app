define(['router'],
function (Router) {
	describe('The Main Router', function () {

		beforeEach(function () {
			spyOn(Backbone.history, 'start');
			Router.initialize();
		});
		
		it('initialize function that starts the backbone history', function () {
			expect(Backbone.history.start).toHaveBeenCalled();
		});

		// In this design pattern, the routes are private and untestable...
		// Routes should probably be modularized to be testable as well

	});
});