// Store API query variables
var baseURL = "https://data.kcmo.org/resource/2ebw-sp7f.json" 

// Assemble API query URL
var url = baseURL
//console.log("aaa")


// Grab the data with d3
d3.json(url).then(function (response) {


  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i].location;

    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup(response[i].descriptor));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);
});
