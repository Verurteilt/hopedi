$(document).ready(function(){
    if(localStorage.getItem("userpk") && localStorage.getItem("premium")){
        $.mobile.changePage("principal.html");
    }
});


