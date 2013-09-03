define(['jquery', 'underscore', 'backbone', 'views/beer_list', 'views/new_beer'],
function($, _, Backbone, BeerListView, NewBeerView) {
	var Router = Backbone.Router.extend({
		routes: {
			'':'home',
      'beers/:action':'beer'
		}
	});

	var initialize = function(){
    	var router = new Router();
      
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
            Backbone.history.navigate(href, true);
          }
        });
      }
    	
      router.on('route:home', function(){
    	  var beerList = new BeerListView();
    	  beerList.render();
    	});

      router.on('route:beer', function (action) {
        if(action == 'new'){ 
          var newBeer = new NewBeerView();
          newBeer.render();
        }
      });

    	
  	};
  	return { initialize: initialize }
});