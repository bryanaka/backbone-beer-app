define(['models/beer'],function (Beer) {
    describe('The Beer Model', function () {
        
        it('is not undefined', function () {
        	expect(Beer).not.toBeUndefined();
        });

        it('has normal backbone model functions', function () {
        	var beer = new Beer();
        	expect( _.isFunction(beer.get) ).toBe(true)
    		expect( _.isFunction(beer.set) ).toBe(true)
        });

    });
});
