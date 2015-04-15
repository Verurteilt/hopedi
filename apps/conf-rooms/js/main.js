$(document).ready(function(){
	var premium = localStorage.getItem("premium");
	if(premium !== undefined && premium !== "undefined"){
		premium = JSON.parse(premium);
    	if(premium == true){
	        $.mobile.changePage("principal.html");
	    }else if(premium == false){
    		$.mobile.changePage("principal-bloqueado.html");
    	}
    }
});


