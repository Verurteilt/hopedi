requirejs.config({
  baseUrl: 'js',
  waitSeconds: 5,
  paths: {
    jquery: '../../../lib/jquery/jquery-1.11.2.min',
    underscore: '../../../lib/underscore/underscore.min',
    backbone: '../../../lib/backbone/backbone.min',
    jquerym: '../../../lib/jqm/1.4.5/jquery.mobile-1.4.5.min',
    domReady: 'domReady'
  },

  shim: {
    'jquery': {
      deps: []
    },
    'jquerym': {
      deps: ['jquery'],
      exports: 'jquery'
    },
    'underscore': {
      deps: [],
      exports: "_"
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
  },
  priority: ['jquery', 'jquerym']
});