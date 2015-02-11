window.$ = window.jQuery = require('./vendor/jquery.js');
require('./vendor/bootstrap.js');

require('./vendor/fastclick.js');

$(function() {
	$(".canvas em").text(Modernizr.canvas);
	$(".video em").text(Modernizr.video);
	$(".localstorage em").text(Modernizr.localstorage);
	$(".svg em").text(Modernizr.svg);
	$(".fontface em").text(Modernizr.fontface);
	$(".borderradius em").text(Modernizr.borderradius);
	$(".opacity em").text(Modernizr.opacity);
	$(".textshadow em").text(Modernizr.textshadow);
	$(".geolocation em").text(Modernizr.geolocation);
	var attr = ['autocomplete', 'autofocus', 'list', 'placeholder', 'max', 'min', 'multiple', 'pattern', 'required', 'step'];
	for (i = 0; i < attr.length; i++) {
		if(Modernizr.input[attr[i]]) {var liClass = 'alert alert-success';} else {var liClass = 'alert alert-danger';}
	    $("#inputsA ul").append("<li class='" + liClass + " list-group-item col-xs-6'><strong>" + attr[i] + "</strong></li>");
	}	

	var types = ['search', 'tel', 'url', 'email', 'datetime', 'date', 'month', 'week', 'time', 'datetime-local', 'number', 'range', 'color'];
	for (i = 0; i < types.length; i++) {
		if(Modernizr.inputtypes[types[i]]) {var liClass = 'alert alert-success';} else {var liClass = 'alert alert-danger';}
	    $("#inputsT ul").append("<li class='" + liClass + " list-group-item col-xs-6'><strong>" + attr[i] + "</strong></li>");
	}	

});

