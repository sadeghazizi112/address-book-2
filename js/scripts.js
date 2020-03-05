

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
  var firstname = $("#yourfirstname").val();
  var lastname = $("#yourlastname").val();
  var address = $("#address").val();
  var phonenumber = $("#phonenumber").val();
  console.log(address);
  console.log(phonenumber);
    $("#firstname").text(firstname);
    $("#lastname").text(lastname);
    $("#youraddress").text(address);
    $("#yourphonenumber").text(phonenumber);


  });
});
