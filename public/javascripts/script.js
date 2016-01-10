'use strict';

// capture input
// confirm its an integer and only five digits long

$(document).ready(function() {
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

  function zipCheck(num) {
    if (num.length === 5 && Number(num)) {
      return num;
    } else {
      return false;
    }
  }

  mapboxgl.accessToken =
    'pk.eyJ1Ijoib21hcmltYXllcnN3YWxrZXIiLCJhIjoiODJlZjMxYjhiYjJmZTkwMDBkZDFhYzM2OTU3NDQxZjMifQ.ZjdJwZ3elIR4Ubp0xNC9yw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8',
    center: [-105.0002, 39.7541],
    zoom: 12
  });

  map.addControl(new mapboxgl.Geocoder());

  /* geocoder.query('21202', showMap); */

});
