define(['jquery','views/new_beer','views/beer_list', 'models/beer', 'collections/beers'],
function ($, NewBeerView, BeerListView, Beer, BeersCollection) {
	describe('NewBeerView', function () {
		var view, list, beer, beers_collection;

		beforeEach(function () {
			beers_collection = new BeersCollection();
			beer = new Beer({ name: 'Bud Light', quantity: 12, container:'can', type: 'lager' });
			view = new NewBeerView({ collection: beers_collection });
			list = new BeerListView({ collection: beers_collection });
			list.render();
		});

		it('can create a new instance', function () {
			expect(view).toBeDefined();
		});

		it('has $el set to #new-beer-container', function () {
			expect( view.$el ).toEqual( $('#new-beer-container') );
		});

		it('has a new beer set to this.model', function () {
			// compare in JSON because BB Model CID changes
			var new_beer = new Beer();
			expect( view.model.toJSON() ).toEqual( new_beer.toJSON() );
		});

		it('has a beers collection set to this.collection', function () {
			expect(view.collection).toEqual(beers_collection);
		});

		// it('renders the form', function() {
		// 	view.render();
		// 	expect( list.$('#new_beer_modal').length ).toBeGreaterThan(0);
		// 	expect( view.$('form').length ).toBeGreaterThan(0);
		// });
		// 
		// it('can close the modal', function () {});
		// it('destroys the view on close', function () {});
	});
});