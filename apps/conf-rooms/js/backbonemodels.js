define(['jquery','backbone'], function($, Backbone){
	var Login = Backbone.Model.extend({
		urlRoot: 'htpp://localhost:8000/apiv1/login'

	});

	return {
		"Login": Login
	}
});