function logout(){
    localStorage.setItem("premium", undefined);
    $.mobile.changePage("index.html");

}
$(document).ready(function(){
	$('#close_popup').bind('click',function(){
      $('#dlg-invalid-credentials').popup('close');
      $('#dlg-invalid-credentials').hide();
  	});

	$('.farmaco').bind('click', function(event){
		event.preventDefault();
		var clave_farmaco = $(this).attr('data-clave');
		$.ajax({
			url: 'https://aqueous-fjord-8596.herokuapp.com/apiv1/obtener_cuadros_generales_subfarmacos/',
			type: 'GET',
			data: {"farmaco_clave":clave_farmaco},
		})
		.done(function(data) {
			if(data.code == "ERROR"){
    			$('#error_popup_message').html("Hubo algún error con el servidor, intentalo de nuevo");
        		$('#dlg-invalid-credentials').popup();
        		$('#dlg-invalid-credentials').show();
        		$('#dlg-invalid-credentials').popup('open');
      		}else{
        		var imagenes = JSON.stringify(data.data[0]);
        		var medicinas = JSON.stringify(data.data[1]);
        		localStorage.setItem("cuadros_generales",imagenes );
        		localStorage.setItem("medicinas",medicinas );
        		$.mobile.changePage("tabla.html");
      		}
    	})
    	.fail(function(){
    		$('#error_popup_message').html("Hubo algún error con el servidor, intentalo de nuevo");
      		$('#dlg-invalid-credentials').popup();
      		$('#dlg-invalid-credentials').show();
      		$('#dlg-invalid-credentials').popup('open');
    	});
	});
});


