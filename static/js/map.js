// Creating map object
var myMap = L.map("map", {
  center: [39.09, -94.57],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the geojson data.
var link = "data/Neighborhood.geojson";

// Function that will determine the color of a neighborhood based on the nbhname it belongs to
function chooseColor(nbhname) {
  switch (nbhname) {
  case "Central Blue Valley And Park Tower Gardens":
    return "yellow";
  case "Ivanhoe Northeast":
    return "red";
  case "Ivanhoe Southeast":
    return "red";
  case "Key Coalition":
    return "green";
  case "Ivanhoe Southwest":
    return "red";
  case "Palestine West And Oak Park Northeast":
      return "purple";
  case "Blue Hills":
      return "blue";
  case "Oak Park Northwest":
      return "purple";
  case "Oak Park Southeast":
      return "purple";
  case "Linwood Homeowners-Ivanhoe":
      return "red";
  case "East Blue Valley":
      return "yellow";
  case "Blue Hills Estates":
      return "blue";
  case "Palestine East":
      return "orange";
  case "West Blue Valley":
      return "yellow";
  case "Oak Park Southwest":
      return "purple";
  case "South Blue Valley":
      return "yellow";
  case "Washington Wheatley":
      return "pink";
  case "Wendell Phillips":
      return "teal";
  default:
    return "black";
  }
}

// Grabbing our GeoJSON data..
d3.json(link).then(function(data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Style each feature (in this case a neighborhood)
    style: function(feature) {
      return {
        color: "white",
        // Call the chooseColor function to decide which color to color our neighborhood (color based on nbhname)
        fillColor: chooseColor(feature.properties.nbhname),
        fillOpacity: 0.3,
        weight: 1.5
      };
    },
    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.4
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.3
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          myMap.fitBounds(event.target.getBounds());
        }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup("<h2>" + feature.properties.nbhname + "</h2>");

    }
  }).addTo(myMap);
});
