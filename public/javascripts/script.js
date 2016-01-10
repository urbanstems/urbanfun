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
  var map = L.map('map').setView([38.9038829, -77.0360032], 15);
  
  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,

      id: 'omarimayerswalker.olj71bc9',
      accessToken: 'pk.eyJ1Ijoib21hcmltYXllcnN3YWxrZXIiLCJhIjoiODJlZjMxYjhiYjJmZTkwMDBkZDFhYzM2OTU3NDQxZjMifQ.ZjdJwZ3elIR4Ubp0xNC9yw'
    }).addTo(map);

});
