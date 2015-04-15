$(document).ready(function(){
  $('#close_popup').bind('click',function(){
      $('#dlg-invalid-credentials').popup('close');
      $('#dlg-invalid-credentials').hide();
  });
  $('#btn-submit_login').bind('click',function(){
    $.ajax({
      url: 'http://localhost:8000/apiv1/login/',
      type: 'POST',
      data: {"cedula": $('#cedula_login').val(), "password": $('#password_login').val()},
    })
    .done(function(data) {
      if(data.code == "ERROR"){
        $('#error_popup_message').html(data.data);
        $('#dlg-invalid-credentials').popup();
        $('#dlg-invalid-credentials').show();
        $('#dlg-invalid-credentials').popup('open');
      }else{
        var data_parseada = JSON.parse(data.data);
        localStorage.setItem("userpk", data_parseada[0].pk);
        localStorage.setItem("premium", data_parseada[0].fields.pagado);
        //localStorage.setItem("userId", );
        $.mobile.changePage("principal.html");
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


