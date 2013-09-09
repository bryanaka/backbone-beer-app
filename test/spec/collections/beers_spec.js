define(['collections/beers'],function (Beers) {
    describe('The Beers Collection', function () {
        
        it('is not undefined', function () {
        	expect(Beers).not.toBeUndefined();
        });

      //   it('has normal backbone model functions', function () {
      //    	var beer = new Beers();
      //    	expect( _.isFunction(beer.get) ).toBe(true)
      //        expect( _.isFunction(beer.set) ).toBe(true)
      //   });

    });
});
