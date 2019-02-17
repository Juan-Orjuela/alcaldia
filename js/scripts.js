$(document).ready(function () {
    //INCIAR FULLPAGE
    $('#fullpage').fullpage({
        anchors: ['introduccion', 'superficie', 'inversion', 'financiacion', 'construccion-tunal', 'construccion-fontanar', 'construccion-sancristobal', 'construccion-restantes', 'ubicacion', 'footer'],
        sectionsColor: ['#EDEDED', '#EDEDED', '#EDEDED', '#EDEDED', '#C4CBCE', '#C4CBCE', '#C4CBCE', '#C4CBCE', '#EDEDED'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Introducción', 'Superficie', 'Inversión', 'Financiación', 'Avances Tunal', 'Avances Fontanar del Río', 'Avances San Cristobal', 'Próximas licitaciones', 'Ubicación', 'Cierre'],
        afterLoad: function (anchorLink, index) {
            animarSlide(index);
        }

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
        arrows: false
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
    //Bajar con flechas
    $('.bajar').on('click', function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    //ANIMAR SLIDES
    function animarSlide(slide) {
        console.log(slide);
        var animacion = anime.timeline({
            loop: false,
            autoplay: false,
            easing: 'linear'
        });
        var animacionTxt = anime.timeline({
            loop: false,
            autoplay: false,
            easing: 'linear',
            delay: 1000
        }).add({
            targets: '#fila-' + slide + ' .txt-puntos i',
            opacity: [0, 1],
            delay: function () {
                return anime.random(0, 1000);
            }
        })
            .add({
                targets: '#fila-' + slide + ' .txt-cuadros',
                opacity: [0, 1],
                duration: 1000,
                delay: anime.stagger(200)
            }, '-=200');


        var animacionConector = anime.timeline({
            loop: false,
            autoplay: false,
            easing: 'linear'

        })
            .add({
                targets: '#fila-' + slide + ' .linea',
                width: [0, '100%'],
                duration: 1500,
                delay: 3000
            })
            .add({
                targets: '#fila-' + slide + ' .linea',
                height: [0, '100%'],
                duration: 1500
            })
            .add({
                targets: '#fila-' + slide + ' .fin',
                opacity: [0, 1],
                duration: 500
            });
        var animacionIlustra = anime.timeline({
            loop: false,
            autoplay: false,
            easing: 'linear'
        })
            .add({
                targets: '#fila-' + slide + ' .piso',
                translateY: {
                    value: [-200, 0],
                    duration: 800,
                    easing: 'easeOutQuad'
                },
                opacity: {
                    value: [0, 1],
                    duration: 200
                }
            })
            .add({
                targets: '#fila-' + slide + ' .pared',
                translateY: {
                    value: [-200, 0],
                    duration: 600,
                    easing: 'easeOutQuad'
                },
                opacity: {
                    value: [0, 1],
                    duration: 200
                },
                delay: anime.stagger(500)
            }, '-=1000')
            .add({
                targets: '#fila-' + slide + ' .elem',
                opacity: {
                    value: [0, 1],
                    duration: 600
                },
                delay: anime.stagger(500)
            })
            .add({
                targets: '#fila-' + slide + ' .animacion',
                opacity: {
                    value: [0, 1],
                    duration: 500
                },
                delay: anime.stagger(200 * 1),
                complete: animacionConector.play()
            }, '-=500');



        function animCustom() {
            switch (slide) {
                case 1:
                    animacion.add({
                        targets: '#fila-1 h1',
                        translateY: {
                            value: [20, 0],
                            duration: 800
                        },
                        opacity: {
                            value: [0, 1],
                            duration: 2000
                        }
                    })
                        .add({
                            targets: '#fila-1 p',
                            translateY: {
                                value: [20, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            }
                        }, '-=800')
                        .add({
                            targets: '#fila-1 .carrusel',
                            opacity: [0, 1],
                            duration: 1000
                        }, '-=1500')
                        .add({
                            targets: '#fila-1 .bajar',
                            opacity: [0, 1],
                            duration: 2000
                        });
                    break;
                case 2:
                    animacion.add({
                        targets: '#fila-2 .num',
                        opacity: {
                            value: [0, 1],
                            duration: 2000
                        },
                        innerHTML: {
                            value: [0, 12000],
                            duration: 2000
                        },
                        easing: 'linear',
                        round: 1
                    }, '-=500')
                        .add({
                            targets: '#fila-2 .uni',
                            opacity: {
                                value: [0, 1],
                                duration: 1000
                            }
                        })
                        .add({
                            targets: '#fila-2 p',
                            translateY: {
                                value: [20, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            }
                        }, '-=1500');
                    break;
                case 3:
                    animacion
                        .add({
                            targets: '#fila-3 .num',
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            },
                            innerHTML: {
                                value: [0, 57000],
                                duration: 2000
                            },
                            easing: 'linear',
                            round: 1
                        }, '-=500')
                        .add({
                            targets: '#fila-3 .sig',
                            opacity: {
                                value: [0, 1],
                                duration: 1000
                            }
                        })
                        .add({
                            targets: '#fila-3 p',
                            translateY: {
                                value: [20, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            }
                        }, '-=1500');
                    break;
                case 4:
                    animacion.add({
                        targets: '#fila-4 .num',
                        opacity: [0, 1],
                        duration: 2000,
                        easing: 'linear'

                    })
                        .add({
                            targets: '#fila-4 .uni',
                            opacity: {
                                value: [0, 1],
                                duration: 1000
                            }
                        }, '-=1000')
                        .add({
                            targets: '#fila-4 .large',
                            translateY: {
                                value: [20, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            }
                        }, '-=500');
                    break;
                case 5:
                    animacion
                        .add({
                            targets: '#fila-5 h2',
                            translateY: {
                                value: [20, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            }
                        })
                        .add({
                            targets: '#fila-5 .graf',
                            opacity: {
                                value: [0, 1],
                                duration: 1000
                            }
                        }, '-=1000')
                        .add({
                            targets: '#fila-5 .graf .num',
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            },
                            innerHTML: {
                                value: [0, 12],
                                duration: 2000
                            },
                            easing: 'linear',
                            round: 1
                        }, '-=500')
                        .add({
                            targets: '#fila-5 p',
                            translateY: {
                                value: [20, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            },
                            delay: anime.stagger(400)
                        }, '-=1500')
                        .add({
                            targets: '#fila-5 .right-5 .num',
                            innerHTML: {
                                value: [0, 13533],
                                duration: 2000
                            },
                            easing: 'linear',
                            round: 1
                        }, '-=1500');
                    break;
                case 6:
                    animacion
                        .add({
                            targets: '#fila-6 .graf',
                            opacity: {
                                value: [0, 1],
                                duration: 1000
                            }
                        })
                        .add({
                            targets: '#fila-6 .graf .num',
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            },
                            innerHTML: {
                                value: [0, 2],
                                duration: 2000
                            },
                            easing: 'linear',
                            round: 1
                        }, '-=500')
                        .add({
                            targets: '#fila-6 p',
                            translateY: {
                                value: [20, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            },
                            delay: anime.stagger(400)
                        }, '-=1500')
                        .add({
                            targets: '#fila-6 .left-6 .num',
                            innerHTML: {
                                value: [0, 12867],
                                duration: 2000
                            },
                            easing: 'linear',
                            round: 1
                        }, '-=1500');
                    break;
                case 7:
                    animacion
                        .add({
                            targets: '#fila-7 .graf',
                            opacity: {
                                value: [0, 1],
                                duration: 1000
                            }
                        })
                        .add({
                            targets: '#fila-7 .graf .num',
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            },
                            innerHTML: {
                                value: [0, 2],
                                duration: 2000
                            },
                            easing: 'linear',
                            round: 1
                        }, '-=500')
                        .add({
                            targets: '#fila-7 p',
                            translateY: {
                                value: [20, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 2000
                            },
                            delay: anime.stagger(400)
                        }, '-=1500');
                    break;
                case 8:
                    animacion.add({
                            targets: '#fila-8 .col-6, #fila-8 .recuadro',
                            translateY: {
                                value: [60, 0],
                                duration: 800
                            },
                            opacity: {
                                value: [0, 1],
                                duration: 1000
                            },
                            delay: anime.stagger(600)
                        });
                    break;
                default:
                    console.log('Si es el slide 223423');
            }
        }
        animCustom();
        /*animacion.add({
            targets: ['#fila-1 h1', '#fila-1 small'],
            translateY: {
                value: [-20, 0],
                duration: 800
            },
            opacity: {
                value: [0, 1],
                duration: 1200
            },
            easing: 'linear',
            delay: function (el, i) {
                return 1000 + (i * 200);
            },
            offset: '-=1000'
        })
            .add({
                targets: '#fila-1 .carrusel',
                opacity: [0, 1],
                duration: 2000,
                easing: 'linear',
                offset: '-=1000'
            });*/
        //Final animacion

        animacion.play();
        animacionTxt.play();
        animacionIlustra.play();
    } //Fin animar Slide

    //Fin
});