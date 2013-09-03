/*global define*/

define([
    'underscore',
    'backbone',
    'models/beer'
], function (_, Backbone, Beer) {
    'use strict';

    var BeersCollection = Backbone.Collection.extend({
        model: Beer
    });

    return BeersCollection;
});