/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var BeerModel = Backbone.Model.extend({
        defaults: {
        	name: 'No Name',
        	type: 'lager',
        	quantity: 12,
        	container: 'can'
        }
    });

    return BeerModel;
});