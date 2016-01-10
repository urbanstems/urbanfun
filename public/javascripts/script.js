'use strict';

// capture input
// confirm its an integer and only five digits long

$(document).ready(function() {
  $('#zip').submit(function(event) {
    event.preventDefault();
    var zip = $('input').val();
    $('#results').html("");
    if (zipCheck(zip)) {
      var zipcode = {zipcode: zip};
      $.get('api/products', zipcode, function(results){
        $('#results').html("Results for zipcode: " + zip);
        results.forEach(function(num) {
          $('#results').append('<p>' + num.name + ' $' + num.price + '</p>');
        });
      });
    } else {
      $('#results').html("Please enter a valid zipcode");
    };
  });
});

function zipCheck(num) {
  if (num.length === 5 && Number(num)) {
    return num;
  } else {
    return false;
  }
}
