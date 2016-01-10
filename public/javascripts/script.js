'use strict';

$(document).ready(function() {

  var goodZip = 80202;
  // checks input for valid zip
  // makes API call
  $('#zip').submit(function(event) {
    event.preventDefault();
    var zip = $('input').val();
    $('#results').html("");
    if (zipCheck(zip)) {
      goodZip = zip;
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

    // map postal code request
    var geoZip =
      'https://api.mapbox.com/geocoding/v5/mapbox.places/' + goodZip +
      '.json?types=postcode&access_token=pk.eyJ1Ijoib21hcmltYXllcnN3YWxrZXIiLCJhIjoiODJlZjMxYjhiYjJmZTkwMDBkZDFhYzM2OTU3NDQxZjMifQ.ZjdJwZ3elIR4Ubp0xNC9yw'


    $.get(geoZip, function(results) {
      var geoLongLat = [];
      var long = results.features[0].geometry.coordinates[1];
      var lat = results.features[0].geometry.coordinates[0];

      geoLongLat.push(long);
      geoLongLat.push(lat);

      // add marker by postal code
      var targetZip = L.marker(geoLongLat).addTo(map);
    });
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
  var map = L.map('map').setView([39.7494, -104.9954], 15);

  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,

      id: 'omarimayerswalker.olj71bc9',
      accessToken: 'pk.eyJ1Ijoib21hcmltYXllcnN3YWxrZXIiLCJhIjoiODJlZjMxYjhiYjJmZTkwMDBkZDFhYzM2OTU3NDQxZjMifQ.ZjdJwZ3elIR4Ubp0xNC9yw'
    }).addTo(map);

});
