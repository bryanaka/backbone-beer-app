/*global define*/
define([ 'jquery','underscore', 'backbone', 'views/beer_list_item', 'collections/beers', 'templates'],
function ($, _, Backbone, BeerListItem, BeerCollection, JST) {
    'use strict';

    var BeerListView = Backbone.View.extend({
        initialize: function () {
            this.collection.on('add', this.render, this);
        },
		el: '#app-container',
        template: JST['app/scripts/templates/beer_list.hbs'],
        render: function () {
            var _this = this;
            this.$el.empty();
            this.$el.html( this.template({}) );
            _.each(this.collection.models, function (model, index, modelsArray) {
                var listItem = new BeerListItem( { 'model': model, 'collection': _this.collection } );
                listItem.render();
            });
        },
        addBeer: function (beer) {
            this.collection.add(beer);
        },
        addList: function () {

        } 
    });

    return BeerListView;
});