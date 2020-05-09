$(document).ready(function(){
$("#submitBtn").on("click",function(event){
    event.preventDefault();

    let newReservation = {
        name: $("#name").val(),
        phoneNumber: $("#phoneNumber").val(),
        email: $("#email").val(),
        ID: $("#uniqueID").val()
    };

    $.post("/api/reservations",newReservation)
     .then(function(data){
         alert("Adding Your Reservations...");
     });
});


    
});