$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/ewallet/hello"
    }).then(function(data, status, jqxhr) {
       $('.id').append(data.id);
       $('.message').append(data.message);
       console.log(jqxhr);
    });
});