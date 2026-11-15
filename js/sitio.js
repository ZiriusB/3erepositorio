// Efecto pARALLAX
$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.30);

		$('header').css({
			'background-position': '0 -' + posicion + 'px'
		});

	});

});


// INICIAMOS WOW
new WOW().init();
