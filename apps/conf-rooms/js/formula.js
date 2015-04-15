function calcular_dosis(){
	var formula_farmaco_id = localStorage.getItem("formula_farmaco_id");
	$.get('http://localhost:8000/apiv1/calcular_formula/',{"formula_farmaco_id": formula_farmaco_id, "edad": $('#edad_calcular').val()},function(data) {
		$.each(data.data, function(index, val) {
			var search = 'p[id="'+index+'"]';
			$(search).html(val);
		});
	});	
}

$( document ).on("pagebeforeshow", function(){
	$('#formula_html').empty();
	var formula_nombre = localStorage.getItem("formula_nombre");
	var formula_farmaco_id = localStorage.getItem("formula_farmaco_id");
	$('#nombre_formula').html(formula_nombre);
	$.get('http://localhost:8000/apiv1/formula_html/',{"formula_farmaco_id": formula_farmaco_id},function(data) {
		$('#formula_html').html(data.data);
		$('#formula_html').trigger('create');
	});
});

