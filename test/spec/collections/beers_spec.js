define(['collections/beers', 'models/beer'],function (Beers, BeerModel) {
    describe('The Beers Collection', function () {
        var beers, beerModel;

        beforeEach(function () {
          beers = new Beers();
          beer_model = new BeerModel();
        });
        
        it('is defined', function () {
        	expect(Beers).not.toBeUndefined();
        });

        it('has Beer as a Model', function () {
          expect( beers.model ).toEqual( BeerModel )
        });

      //   it('has normal backbone model functions', function () {
      //    	var beer = new Beers();
      //    	expect( _.isFunction(beer.get) ).toBe(true)
      //        expect( _.isFunction(beer.set) ).toBe(true)
      //   });

    });
});
