$( document ).ready(function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicmluYXNjaGlsbGVyIiwiYSI6ImNqcm1sZmNkcjBra24zeW1uMHQycXY3a2oifQ.hI2dy3oRA5qb48kXdMn5ug';
    var map = new mapboxgl.Map({
        container: 'map',
        center: [-88.8422, 41.3471],
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 5
    });
    
    var ll = new mapboxgl.LngLat(-73.9749, 40.7736);
    $(document).on( 'fbload',  // Called when Facebook SDK initializes
        function(){ FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                var accessToken = response.authResponse.accessToken;
                FB.api('/1886000451690456/events','GET', {access_token: accessToken},
                    function(response) {
                        console.log(response.data);
                        for (var event of response.data){
                            var lat = _.get(event, 'place.location.latitude');
                            var long = _.get(event, 'place.location.longitude');
                            if (lat != undefined && long != undefined){
                                var popup = new mapboxgl.Popup({ offset: 25 })
                                    .setHTML(getPopupHTML(event));
                                console.log(lat + ", " + long);
                                new mapboxgl.Marker()
                                .setLngLat([long, lat])
                                .setPopup(popup)
                                .addTo(map);

                                

                            }
                           
                        }
                        
                    }
                );
            
                } 
            });              
    });
});

function getPopupHTML(event){
    var header = "<b>" + event.name + "</b>";
    var description = event.description;
    var date = new Date(event.start_time);
    var startDate = "<b>Date: </b>"+ date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
    var startTime = "<b>Time: </b>" + date.getHours() + ":" + date.getMinutes() + "0";
    var link = "<a href='https://www.facebook.com/events/" + event.id + "'>Check out the Facebook event!</a>";
    var itemsInPop = [header, description, startDate, startTime, link];
    var htmlString = "";
    for (item of itemsInPop){
        htmlString += item + "<br>"
    }
    return htmlString
}
