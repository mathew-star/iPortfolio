$(document).ready(function(){

  $("#myForm").submit(function(event) {
    var nameInput = $("#name").val();
    var namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(nameInput)) {
      $("#nameError").text("Name should contain only letters (A-Z, a-z).");
      event.preventDefault(); // Prevent form submission
    }
  });
  jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value.indexOf(" ") < 0 && value != ""; 
  }, "No space please and don't leave it empty");
 
 
  $("#form").validate({
    rules:{
      
      uname:{
         
        required:true,
        minlength:6,
        noSpace:true
      },
      email:{
        required : true,
        noSpace:true,
        email:true
      }

    }
   
  })
 
})

 