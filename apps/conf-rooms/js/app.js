define(['backbonemodels','jquery','backbone'], function($, Backbone, Models){

	function init(){
		$('#btn-submit_login').on('click', function(event,ui){
			console.log("WHAT");
		});
	}

	return {
		'init': init
	}
});