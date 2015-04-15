function popupfa (_this) {
	localStorage.setItem("subfarmaco_id", $(_this).attr('data-id'));
	$.ajax({
		url: 'https://aqueous-fjord-8596.herokuapp.com/apiv1/tiene_formulas/',
		data: {"subfarmaco_id": localStorage.getItem("subfarmaco_id")},
	})
	.done(function(data) {
		if(data.data == false){
			$('#boton_formulas').hide();
		}
	});
	$('#formulas_adversas').popup();
	$('#formulas_adversas').show();
	$('#formulas_adversas').popup("open");
}

function efectos_adversos(){
	var subfarmaco_id = localStorage.getItem("subfarmaco_id");
	$.get('https://aqueous-fjord-8596.herokuapp.com/apiv1/obtener_efectos_adversos/', {"subfarmaco_id": subfarmaco_id}, function(data) {
		localStorage.setItem("efectos_adversos", data.data);
		$.mobile.changePage("efectos-adversos.html");
	});

}

function cambiar_a_formula(id,nombre){
	localStorage.setItem("formula_farmaco_id", id);
	localStorage.setItem("formula_nombre", nombre);
	$.mobile.changePage("calcular.html");
}

function obtener_formulas(){
	var subfarmaco_id = localStorage.getItem("subfarmaco_id");
	$.get('https://aqueous-fjord-8596.herokuapp.com/apiv1/obtener_lista_formulas/', {"subfarmaco_id": subfarmaco_id}, function(data) {
		var formulas = data.data
		if(formulas.length == 1){
			cambiar_a_formula(formulas[0].split("|")[1], formulas[0].split("|")[0])
			$.mobile.changePage("calcular.html");
		}else{
			
		}
	});

}

$( document ).on("pagebeforeshow", function(){
    var cuadros_generales = JSON.parse(localStorage.getItem("cuadros_generales"));
    var lista_medicamentos = JSON.parse(localStorage.getItem("medicinas"));
    $('#tabla_medicamentos').empty();
    $('#tabla_medicamentos').append("<h1>Tabla(s) informativas</h1>");
    $('#lista_medicinas').empty();
    $('#lista_medicinas').append("<h2>Lista de medicinas</h2>");
    String.prototype.format = function (){var e=this.toString();if(!arguments.length)return e;var t=typeof arguments[0],n="string"==t||"number"==t?Array.prototype.slice.call(arguments):arguments[0];for(var i in n)e=e.replace(new RegExp("\\{"+i+"\\}","gi"),n[i]);return e}
    $.each(cuadros_generales, function(index, val) {
    	 var html_cuadro = '<div class="tablas"><a href="#popupPhotoPortrait{index}" data-rel="popup" data-position-to="window" data-transition="fade" ><img  src="{imagen}" class="" alt="Tabla"></a></div><div data-role="popup" id="popupPhotoPortrait{index}" class="photopopup" data-overlay-theme="a" data-corners="false" data-tolerance="30,15" ><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Cerrar</a><img src="{imagen}" alt="Photo portrait" style="height:60%;"></div>'.format({imagen:val, index:index});
          $('#tabla_medicamentos').append(html_cuadro);
    });
    $.each(lista_medicamentos, function(index, val) {
    	 var html_lista = '<div class="boton verde"><a href="#" class="subfarmaco" onclick="popupfa(this);" data-id="{subfarmacoid}">{nombre}</a></div>'.format({nombre:val.split("|")[0], subfarmacoid:val.split("|")[1]});
          $('#lista_medicinas').append(html_lista);
    });
    $('#tabla_medicamentos').trigger('create');
    $('#lista_medicinas').trigger('create');
});

$( document ).on( "pagecreate", function() {
    $( ".photopopup" ).on({
        popupbeforeposition: function() {
            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );
        }
    });
});
