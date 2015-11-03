var $ = window.jQuery = require('jquery');
var Holder = require('holderjs');


function Menu(){
	$('.envoltura').toggleClass('menu-exp');
	$('.menu').toggleClass('collapse');
}

$(window).on('load',function(){
	$('.menu-icon').click(Menu);
});
