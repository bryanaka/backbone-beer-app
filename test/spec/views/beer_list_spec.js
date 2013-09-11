define(['views/beer_list', 'models/beer', 'collections/beers'],
function (BeerListView, Beer, BeersCollection) {
	describe('BeerListView', function () {
		var view, beer, beers_collection;

		beforeEach(function () {
			beers_collection = new BeersCollection();
			beer = new Beer({ name: 'Bud Light', quantity: 12, container:'can', type: 'lager' });
			
			view = new BeerListView( { collection: beers_collection } );
			spyOn(view, 'addBeer').andCallThrough();
			spyOn(view, 'render').andCallThrough();
		});

		it('can create a new instance', function () {
			expect(view).toBeDefined();
		});

		it('has $el set to #app-container', function () {
			expect( view.$el ).toEqual( $('#app-container') );
		});

		it('has a beers collection set to this.collection', function () {
			expect(view.collection).toBeDefined();
			expect(view.collection).toEqual( beers_collection );
		});
		// do not know how to correctly implement this test
		// 
		// it('re-renders when a beers is added to the collection', function () {
		// 	view.addBeer(beer);
		// 	expect( view.render ).toHaveBeenCalled();
		// });
	});
});