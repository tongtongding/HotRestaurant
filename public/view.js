$(document).ready(function(){
    $("")

    $.ajax({
        url:"/api/reservations",
        method:"GET"
    }).then(function(data){
        console.log(data);

        for(var i = 0; i < data.length;i++){
            var newListItem = $("<li>").addClass("list-group-item");

            var name = $("<h3>").text(data[i].name);
            var phone = $("<h3>").text(data[i].phoneNumber);
            var email = $("<h3>").text(data[i].email);
            var ID = $("<h3>").text(data[i].ID);

            newListItem.append(name,phone,email,ID);
            
            if(i<5){
                $("#listReservation").append(newListItem);
                
            }else(
                $("#listWaiting").append(newListItem)
            )       
        }
    })

})