/*global define*/

define([ 'jquery', 'underscore', 'backbone', 'templates'],
function ($, _, Backbone, JST) {
    'use strict';

    var BeerListItemView = Backbone.View.extend({
    	container: '#beer-list',
    	tagName: 'div',
    	className: 'col-sm-4 beer-card-container',
        template: JST['app/scripts/templates/beer_list_item.hbs'],
        initialize: function () {
        	this.cid = this.model.cid;
        	this.model.on('change', this.replace, this);
        },
        render: function () {
        	$(this.container).append( this.getHtml() );
        },
        replace: function () {
        	this.$el.replaceWith( this.getHtml() );
        },
        getHtml: function () {
        	return this.$el.html( this.template( { "beer": this.model.toJSON() } ) );
        },
        events: {
        	'click .js-drink': 'drinkBeer',
        	'click .js-buy-more': 'buyMore'
        },
        drinkBeer: function (event) {
        	var beer_left = this.model.get('quantity') - 12;
        	beer_left <= 0 ? this.finishBeer() : this.model.set('quantity', beer_left);
        },
        finishBeer: function () {
        	this.collection.remove( this.model );
        	// this.model.destory();
        	this.undelegateEvents();
        	this.remove();
        },
        buyMore: function () {

        }
    });

    return BeerListItemView;
});