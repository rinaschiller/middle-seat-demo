$( document ).ready(function() {

    console.log( "ready!" );
    var event_ids = []

    $(document).on(
        'fbload',  //  <---- HERE'S OUR CUSTOM EVENT BEING LISTENED FOR
        function(){
        FB.api(
          '/1886000451690456/events',
          'GET',
          {},
          function(response) {
              // Insert your code here
              console.log(response);
          }
        );

        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
              object:'https://developers.facebook.com/docs/javascript/examples',
            })
          }, function(response){
            // Debug response (optional)
            console.log(response);
          });
              
    });
        

    mapboxgl.accessToken = 'pk.eyJ1IjoicmluYXNjaGlsbGVyIiwiYSI6ImNqcm1sZmNkcjBra24zeW1uMHQycXY3a2oifQ.hI2dy3oRA5qb48kXdMn5ug';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });
});