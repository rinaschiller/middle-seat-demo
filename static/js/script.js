$( document ).ready(function() {

    console.log( "ready!" );
    var event_ids = []

    $(document).on( 'fbload',  // Called when Facebook SDK initializes
        function(){
        var token = "EAADZAHQ1ZBg74BAJEdmpIw70gnxvYtMQynnLiMCjV9v57cXBjcSk5HMTAhgF5vZAVJvRgw0ojDDCUlRJQLFUVIzZBOjQHIUBxVviGmDxHZC2f9Emb6wXBcFeN9uveLbyQMGrFZApCBPOUYglXkhf5i9wozGhxvDmVUJZCbPrUWZAiF8HPBuKyenXft8kBepPNnJ3zrm9GjfaDgZDZD"
        
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
              var accessToken = response.authResponse.accessToken;
              FB.api(
                '/1886000451690456/events',
                'GET',
                {access_token: accessToken},
                function(response) {
                    console.log(response);
                }
              );
            
            } 
          } );

        

    
              
    });
        

    mapboxgl.accessToken = 'pk.eyJ1IjoicmluYXNjaGlsbGVyIiwiYSI6ImNqcm1sZmNkcjBra24zeW1uMHQycXY3a2oifQ.hI2dy3oRA5qb48kXdMn5ug';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });
});