'use strict';

// capture input
// confirm its an integer and only five digits long

$(document).ready(function() {
  $('#zip').submit(function(event) {
    event.preventDefault();
    var zip = $('input').val();
    if (zipCheck(zip)) {
      var zipcode = {zipcode: zip};
      $.get('api/products', zipcode, function(results){
        $('#results').html(results);
      });
    } else {
      console.log('not a zip');
      $('#results').html("Please enter a valid zipcode");
    };
  });
});

function zipCheck(num) {
  if (num.length === 5 && Number(num)){
    return num;
  } else {
    return false;
  }
}
