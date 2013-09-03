/*global define*/

define([ 'jquery', 'underscore', 'backbone', 'templates'],
function ($, _, Backbone, JST) {
    'use strict';

    var BeerListView = Backbone.View.extend({
		el: '#app-container',
        template: JST['app/scripts/templates/beer_list.hbs'],
        render: function () {
        	this.$el.html( this.template({}) );
        },
        addOne: function () {

        },
        addList: function () {

        } 
    });

    return BeerListView;
});