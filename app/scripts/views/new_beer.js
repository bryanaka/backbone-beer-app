/*global define*/

define([ 'jquery', 'underscore', 'backbone', 'templates', 'models/beer'],
function ($, _, Backbone, JST, Beer) {
    'use strict';

    var NewBeerView = Backbone.View.extend({
    	el: '#new-beer-container',
      template: JST['app/scripts/templates/new_beer.hbs'],
      initialize: function () {
        this.model = new Beer();
      },
      render: function () {
      	this.$el.html( this.template({}) );
      },
      events: {
      	'submit #new_beer_form': 'createBeer',
        'click #new_beer_close': 'modalClose',
        'hidden.bs.modal': 'destroyView'
      },
      createBeer: function (event) {
        event.preventDefault();
      	this.model.set({
      		name: this.$('#beer_name').val(),
      		type: this.$('#beer_type').val(),
      		quantity: this.$('#beer_quantity').val(),
      		container: this.$('#beer_container').val()
      	});
        this.collection.add(this.model);
        this.modalClose();
      },
      modalClose: function () {
        this.$('#new_beer_modal').modal('hide');
        Backbone.Router.prototype.navigate('', { trigger:true } );
      },
      destroyView: function () {
        this.undelegateEvents();
        this.$el.removeData().unbind();
        this.$el.empty();
      }
    });

    return NewBeerView;
});