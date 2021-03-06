// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require cocoon
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .
//= require bindWithDelay
//= require social-share-button


$(document).ready(function() {
  if ($('.pagination').length) {
    $(window).bindWithDelay("scroll", function() {
      var url = $('.pagination .next_page a').attr('href');
      	if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
	      	if ($('.pagination .next_page.disabled a').length > 0) {
	      		console.log("disabled");
	      		return false;
	      	} else {
			    $('.pagination').html('<img src="/assets/ajax-loader.gif" alt="Loading..." title="Loading..." />');
			    return $.getScript(url);
			}
	    }
    }, 100);
    return $(window).scroll();
  }
});