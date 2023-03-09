$(document).ready(function() {

    // Configuración
    var tiempoCarrete = 1000; // Tiempo de duración de la transición en milisegundos
    var $imagenes = $('.carrete-imagenes li'); // Obtener todas las imágenes del carrusel
    var conjuntoImagenes = $imagenes.length; // Calcular el número total de imágenes en el carrusel
    var imagenActual = 0; // Establecer la imagen actual a la primera imagen

    // Función para cambiar de imagen
    function cambiarImagen() {
        // Ocultar imagen actual
        $imagenes.eq(imagenActual).removeClass('active');

        // Calcular índice de la siguiente imagen
        imagenActual++;
        if (imagenActual >= conjuntoImagenes) {
            imagenActual = 0;
        }

        // Mostrar siguiente imagen
        $imagenes.eq(imagenActual).addClass('active');
    }

    // Iniciar carrusel mostrando la primera imagen
    $imagenes.eq(imagenActual).addClass('active');

    // Manejar botones siguiente y anterior
    $('.carrete-siguiente').click(function() {
        // Ocultar imagen actual
        $imagenes.eq(imagenActual).removeClass('active');

        // Calcular índice de la imagen anterior
        imagenActual--;
        if (imagenActual < 0) {
            imagenActual = conjuntoImagenes - 1;
        }

        // Mostrar imagen anterior
        $imagenes.eq(imagenActual).addClass('active');
    });

    $('.carrete-anterior').click(function() {
        // Ocultar imagen actual
        $imagenes.eq(imagenActual).removeClass('active');

        // Calcular índice de la siguiente imagen
        imagenActual++;
        if (imagenActual >= conjuntoImagenes) {
            imagenActual = 0;
        }

        // Mostrar siguiente imagen
        $imagenes.eq(imagenActual).addClass('active');
    });

    // Eventos click para mostrar diferentes imágenes al hacer click en diferentes botones
    $(".losangeles").click(()=> {
        $("img").hide()
        $("#Minimaglosangeles").show()
        $("#cabecera").show()
        $("#imaglosangeles").show()
        $imagenes.eq(0).addClass('active'); // Mostrar imagen 0 en el carrusel
    })
    $(".seul").click(()=> {
        $("img").hide()
        $("#Minimagseul").show()
        $("#cabecera").show()
        $("#imagseul").show()
        $imagenes.eq(7).addClass('active'); // Mostrar imagen 7 en el carrusel
    })
    $(".barcelona").click(()=> {
        $("img").hide()
        $("#Minimagbarcelona").show()
        $("#cabecera").show()
        $("#imagbarcelona").show()
        $imagenes.eq(1).addClass('active'); // Mostrar imagen 1 en el carrusel
    })
    $(".atlanta").click(()=> {
        $("img").hide()
        $("#Minimagatlanta").show()
        $("#cabecera").show()
        $("#imagatlanta").show()
        $imagenes.eq(2).addClass('active'); // Mostrar imagen 2 en el carrusel
    })
    $(".sidney").click(()=> {
        $("img").hide()
        $("#Minimagsidney").show()
        $("#cabecera").show()
        $("#imagsidney").show()
        $imagenes.eq(3).addClass('active');
    })
    $(".atenas").click(()=> {
        $("img").hide()
        $("#Minimagatenas").show()
        $("#cabecera").show()
        $("#imagatenas").show()
        $imagenes.eq(4).addClass('active');
    })
    $(".pekin").click(()=> {
        $("img").hide()
        $("#Minimagpekin").show()
        $("#cabecera").show()
        $("#imagpekin").show()
        $imagenes.eq(5).addClass('active');
    })
    $(".londres").click(()=> {
        $("img").hide()
        $("#Minimaglondres").show()
        $("#cabecera").show()
        $("#imaglondres").show()
        $imagenes.eq(6).addClass('active');
    })

});