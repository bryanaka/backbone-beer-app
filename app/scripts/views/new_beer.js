/*global define*/

define([ 'jquery', 'underscore', 'backbone', 'templates', 'models/beer', 'views/beer_list'],
function ($, _, Backbone, JST, Beer, BeerListView) {
    'use strict';

    var NewBeerView = Backbone.View.extend({
    	initialize: function () {
    		this.model = new Beer();
    	},
    	el: '#app-container',
      template: JST['app/scripts/templates/new_beer.hbs'],
      render: function () {
      	this.$el.html( this.template({}) );
      },
      events: {
      	'submit #new_beer_form': 'createBeer'
      },
      createBeer: function (event) {
      	event.preventDefault();
      	this.model.set({
      		name: this.$el.find('#beer_name').val(),
      		type: this.$el.find('#beer_type').val(),
      		quantity: this.$el.find('#beer_quantity').val(),
      		container: this.$el.find('#beer_container').val()
      	});
        var listView = new BeerListView();
        listView.addBeer(this.model);
      }
    });

    return NewBeerView;
});