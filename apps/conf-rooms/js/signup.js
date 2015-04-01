$(document).ready(function(){
  $.get('http://localhost:8000/apiv1/especialidades', function(data) {
    var _data = JSON.parse(data.data);
    $.each(_data, function(index, val){
       var option = '<option value="' + val.pk + '">'+ val.fields.nombre+'</option>';
       $('#select-especialidad').append(option);
    });
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
      	"especialidad": $('#select-especialidad').val()
      },
    })
    .done(function(data) {
      console.log(data);
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


