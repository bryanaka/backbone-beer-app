/*global define*/

define([ 'jquery', 'underscore', 'backbone', 'templates'],
function ($, _, Backbone, JST) {
    'use strict';

    var BeerListItemView = Backbone.View.extend({
    	el: '#beer-list',
        template: JST['app/scripts/templates/beer_list_item.hbs'],
        render: function (data) {
        	this.$el.append( this.template(data) );
        }

    });

    return BeerListItemView;
});