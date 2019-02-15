$(document).ready(function() {
    //INCIAR FULLPAGE
	$('#fullpage').fullpage({
		anchors: ['introduccion', 'superficie', 'inversion', 'financiacion', 'construccion', 'ubicacion'],
        //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Introducción', 'Superficie', 'Inversión', 'Financiación', 'Ubicación']
		
	});

	//methods
    //$.fn.fullpage.setAllowScrolling(false);
    
    //INICIAR SLICK PARA CARRUSELES
    $('.carrusel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
});