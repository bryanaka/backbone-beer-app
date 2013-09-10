define(['views/beer_list', 'models/beer', 'collections/beers'],
function (BeerListView, Beer, BeersCollection) {
	describe('BeerListView', function () {
		var view, beer, beers_collection;

		beforeEach(function () {
			view = new BeerListView();
			beers_collection = new BeersCollection();
			beer = new Beer({ name: 'Bud Light', quantity: 12, container:'can', type: 'lager' });
		});

		it('can create a new instance', function () {
			expect(view).toBeDefined();
			expect(beer).toBeDefined();
		});

		it('has $el set to #app-container', function () {
			expect( view.$el ).toBeDefined();
			expect( view.$el ).toEqual( $('#app-container') );
		});

		it('has a beers collection set to this.collection', function () {
			expect(view.collection).toBeDefined();
			expect(view.collection).toEqual( beers_collection );
		});

		it('can add a beer to the list', function () {
			expect( view.addBeer ).toBeDefined();
			view.addBeer(beer);
			expect( view.$('.beer-card').length ).toEqual(1);
		});
	});
});