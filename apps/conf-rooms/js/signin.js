$(document).ready(function(){
  $('#btn-submit_login').bind('click',function(){
    $.ajax({
      url: 'http://localhost:8000/apiv1/login/',
      type: 'POST',
      data: {"email": $('#email_login').val(), "password": $('#password_login').val()},
    })
    .done(function(data) {
      if(data.code == "ERROR"){
        $('#error_popup_message').html(data.data);
      }
    });
    
    $('#dlg-invalid-credentials').popup();
    $('#dlg-invalid-credentials').show();
    $('#dlg-invalid-credentials').popup('open');
  });
});

