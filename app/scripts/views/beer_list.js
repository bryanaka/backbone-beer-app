/*global define*/
define([ 'jquery','underscore', 'backbone', 'views/beer_list_item', 'collections/beers', 'templates'],
function ($, _, Backbone, BeerListItem, BeerCollection, JST) {
    'use strict';

    var BeerListView = Backbone.View.extend({
        initialize: function () {
            this.collection = new BeerCollection();
        },
		el: '#app-container',
        template: JST['app/scripts/templates/beer_list.hbs'],
        render: function () {
            this.$el.empty();
            this.$el.html( this.template({}) );
            _.each(this.collection.models, function (element, index, array) {
                var listItem = new BeerListItem();
                listItem.render( { beer: element.toJSON() } );
            });
        },
        addBeer: function (beer) {
            this.collection.add(beer);
            this.render();
        },
        addList: function () {

        } 
    });

    return BeerListView;
});