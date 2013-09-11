define(['window','jquery', 'underscore', 'backbone', 'views/beer_list', 'views/new_beer', 'models/beer', 'collections/beers','bootstrap'],
function(window, $, _, Backbone, BeerListView, NewBeerView, Beer, BeerCollection) {
	var Router = Backbone.Router.extend({
		routes: {
			'':'index',
      'beers/:action':'beer'
		}
	});

	var initialize = function(){
    var router = new Router();
    var beer_collection = new BeerCollection();

    router.on('route:index', function() {
      var beer_list = new BeerListView({ collection: beer_collection });
      beer_list.render();
    });

    router.on('route:beer', function (action) {
      if(action == 'new'){
        new NewBeerView( { collection: beer_collection } ).render();
        $('#new_beer_modal').modal();
      }
    });
    
    Backbone.history.start( { pushState: window.Modernizr.history } );

    if (Backbone.history && Backbone.history._hasPushState) {
      // Use delegation to avoid initial DOM selection and allow all matching elements to bubble
      $(document).delegate("a", "click", function(evt) {
        // Get the anchor href and protcol
        var href = $(this).attr("href");
        var protocol = this.protocol + "//";
     
        // Ensure the protocol is not part of URL, meaning its relative.
        // Stop the event bubbling to ensure the link will not cause a page refresh.
        if (href.slice(protocol.length) !== protocol) {
          evt.preventDefault();
     
          // Note by using Backbone.history.navigate, router events will not be
          // triggered.  If this is a problem, change this to navigate on your
          // router.
          router.navigate(href, {trigger: true});
        }
      });
    }
    
  };
  
  return { initialize: initialize };

});