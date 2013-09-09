define(['models/beer'],function (Beer) {
    describe('The Beer Model', function () {
        var attrs = ['name', 'type', 'quantity', 'container'],
            defaults = ['No Name', 'lager', 12, 'can'],
            beer;

        beforeEach(function(){
            beer = new Beer();
        });

        it('is not undefined', function () {
        	expect(Beer).not.toBeUndefined();
        });

        it('has normal backbone model functions', function () {
        	expect( _.isFunction(beer.get) ).toBe(true)
    		expect( _.isFunction(beer.set) ).toBe(true)
        });

        attrs.forEach(function(element, index, array){
            it('has the attribute ' + element + ' defined', function () {
                expect( beer.has(element) ).toBe(true);
            });

            it('has the attribute ' + element + ' default set to ' + defaults[index], function () {
                expect( beer.get(element) ).toBe( defaults[index] );
            });
        });

    });
});
