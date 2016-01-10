'use strict';

// capture input
// confirm its an integer and only five digits long

$(document).ready(function() {

  // checks input for valid zip
  // makes API call
  $('#zip').submit(function(event) {
    event.preventDefault();
    var zip = $('input').val();
    $('#results').html("");
    if (zipCheck(zip)) {
      var zipcode = {
        zipcode: zip
      };
      $.get('api/products', zipcode, function(results) {
        if (results.length === 0) {
          window.location.href = '/form';
        } else {
          $('#results').html("Results for zipcode: " + zip);
          results.forEach(function(num) {
            $('#results').append('<p>' + num.name + ' $' + num.price +
              '</p>');
          });
        }
      });
    } else {
      $('#results').html("Please enter a valid zipcode");
    };
  });

  // validates input for correct zip code format
  function zipCheck(num) {
    if (num.length === 5 && Number(num)) {
      return num;
    } else {
      return false;
    }
  }

  // map
  mapboxgl.accessToken =
    'pk.eyJ1Ijoib21hcmltYXllcnN3YWxrZXIiLCJhIjoiODJlZjMxYjhiYjJmZTkwMDBkZDFhYzM2OTU3NDQxZjMifQ.ZjdJwZ3elIR4Ubp0xNC9yw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8',
    center: [-105.0002, 39.7541],
    zoom: 12
  });

  map.addControl(new mapboxgl.Geocoder());

  mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
      type: 'Point',
      // coordinates here are in longitude, latitude order because
      // x, y is the standard for GeoJSON and many formats
      coordinates: [-105.0002, 39.7541]
    },
    properties: {
      title: 'Peregrine Espresso',
      description: '1718 14th St NW, Washington, DC',
      // one can customize markers by adding simplestyle properties
      // https://www.mapbox.com/guides/an-open-platform/#simplestyle
      'marker-size': 'large',
      'marker-color': '#BE9A6B',
      'marker-symbol': 'cafe'
    }
  }).addTo(map);

});
