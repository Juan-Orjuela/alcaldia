$(document).ready(function() {
    //INCIAR FULLPAGE
	$('#fullpage').fullpage({
		anchors: ['introduccion', 'superficie', 'inversion', 'financiacion', 'construccion', 'ubicacion', 'footer'],
        //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Introducción', 'Superficie', 'Inversión', 'Financiación', 'Construcción', 'Ubicación', 'Cierre']
		
	});

	//methods
    //$.fn.fullpage.setAllowScrolling(false);
    
    //INICIAR SLICK PARA CARRUSELES
    $('.carrusel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:false
      });
      //Generar textura de puntos ========
	$('.txt-puntos').each(function () {
		var col = $(this).data("col"),
			row = $(this).data("row"),
			ancho = (col - 1) * 16 + 2 + "px",
			alto = (row - 1) * 16 + 2 + "px",
			nCol = 0,
			nRow = 0;

		$(this).css({
			width: ancho,
			height: alto
		});

		for (var i = 1; i <= col * row; i++) {

			if (i % col == 1) {
				nCol = 0;
				nRow++;
			} else {
				nCol++;
			}

			var pTop = nRow * 16 - 16,
				pLeft = nCol * 16;

			//console.log("Top: "+ pTop + ", Left: "+ pLeft + " - " + index);

			$(this).append('<i style=\"top: ' + pTop + 'px; left: ' + pLeft + 'px\"></i>');
		}
	});

//Fin
});