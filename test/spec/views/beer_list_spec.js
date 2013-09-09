define(['views/beer_list', 'models/beer'], function (BeerListView, Beer) {
	describe('BeerListView', function () {
		var view, beer;

		beforeEach(function () {
			view = new BeerListView();
			beer = new Beer({ name: 'Bud Light', quantity: 12, container:'can', type: 'lager' });
		});

		it('can create a new instance', function () {
			expect(view).toBeDefined();
		});

		it('has $el set to #app-container', function () {
			expect( view.$el ).toBeDefined();
			expect( view.$el ).toEqual( $('#app-container') );
		});

		it('can add a beer to the list', function () {
			expect( view.addBeer ).toBeDefined();
			view.addBeer(beer);
			expect( view.$('.beer-card').length ).toEqual(1);
		});
	});
});