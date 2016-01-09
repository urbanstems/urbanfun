'use strict';

// capture input
// confirm its an integer and only five digits long

$(document).ready(function() {
  console.log('working');
  $('#zip').submit(function(event) {
    event.preventDefault();
    var zip = $('input').val();
    zipCheck(zip);
  });
});

function zipCheck(num) {
  if (num.length === 5 && Number(num)){
    console.log(num);
  } else {
    console.log('Not a zipcode');
  }
}
