// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'susancarl.019hp669';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1Ijoic3VzYW5jYXJsIiwiYSI6ImNpbnA5MTJheDEwYW51a20zYWpkNjZ5eWYifQ.P9V_ZZj0a5mowJe3nRHoMQ'


// Create the map object with your mapId and token,
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!

var dataFileToAdd = 'data/restaurants.geojson';

var featureLayer = L.mapbox.featureLayer();
featureLayer.LoadURL(dataFileToAdd);
featureLayer.addTO (map);

featureLayer.on('ready',function()
                this.eachLayer(function(layer))
layer.setIcon(L.map.marker.icon)
"marker-color":#8834bb",
                "marker-size":"Large",
                "marker-symbol":"restaurant"
                
                map.fitBounds(featureLayer.getBounds());
var dataFileToAdd = 'data/restaurants.geojson';
var featureLayer = L.mapbox.featureLayer()
    .loadURL(dataFileToAdd)
    .addTo(map);
featureLayer.on('ready', function() {
  this.eachLayer(function(layer){
    layer.setIcon(L.mapbox.marker.icon({
      'marker-color': '#8834bb',
      'marker-size': 'large',
      'marker-symbol': 'restaurant'
    }))
  });
  map.fitBounds(featureLayer.getBounds());
});
