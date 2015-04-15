$(document).ready(function(){
  $('#close_popup').bind('click',function(){
      $('#dlg-invalid-credentials').popup('close');
      $('#dlg-invalid-credentials').hide();
  });
  $('#btn-submit_signup').bind('click', function(event){
  	$.ajax({
      url: 'http://localhost:8000/apiv1/signup/',
      type: 'POST',
      data: {
      	"nombre": $('#nombre_signup').val(), 
      	"email": $('#email_signup').val(),
      	"password": $('#password_signup').val(),
      	"password_2": $('#password_confirm').val(),
      	"cedula": $('#cedula_signup').val()
      },
    })
    .done(function(data) {
      if(data.code == "ERROR"){
        $('#error_popup_message').html(data.data);
        $('#dlg-invalid-credentials').popup();
        $('#dlg-invalid-credentials').show();
    	$('#dlg-invalid-credentials').popup('open');
      }else{
      	$('#dlg-sign-up-sent').popup();
      	$('#dlg-sign-up-sent').show();
    	$('#dlg-sign-up-sent').popup('open');
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


