
// //

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $(this).attr('href');
        var offset = 200; // Ajusta este valor según sea necesario
        var targetPosition = $(target).offset().top;
        var scrollToPosition = targetPosition - offset;

        $('html, body').animate({
            scrollTop: scrollToPosition
        }, 0);
    });
});

// NAV BAR SCROLLED //

window.addEventListener("scroll", function () {
    var navbar = document.getElementById("myNavbar");
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// RESPONSIVE NAVBAR//

$(document).ready(function () {
    $('.hamburger').click(function () {
        $('#menuPanel').toggleClass('open');
    });
});

// CARRUSEL //

$(document).ready(function () {
    $('.slick-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1, // Cambiar el valor a 3 para que pase de 3 en 3
        autoplay: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        autoplaySpeed: 1000,
        responsive: [
            {
                // Configuración para pantallas móviles (menos de 768px)
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

// CARRUSEL DE OFERTAS //

$(document).ready(function () {
    $(".ofertas-carousel").slick({
        arrows: true,
        prevArrow: '<button class="slick-prev rec" type="button"><i class="fas fa-chevron-circle-left fa-2xl"></i></button>',
        nextArrow: '<button class="slick-next rec" type="button"><i class="fas fa-chevron-circle-right fa-2xl"></i></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });
});

// CARRUSEL INTRODUCCION //

$(document).ready(function () {
    $(".carrusel").slick({
        arrows: true,
        prevArrow: '<button class="slick-prev rec" type="button"><i class="fas fa-chevron-circle-left fa-2xl"></i></button>',
        nextArrow: '<button class="slick-next rec" type="button"><i class="fas fa-chevron-circle-right fa-2xl"></i></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });
});

// CARRUSEL EXPLORA EL PARQUE //

$(document).ready(function () {
    $('.carousel-explorar').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Siguiente</button>',
        centerMode: true,
        centerPadding: '100px', // Adjust the padding as needed to control the size of the cards on the sides
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the time interval for autoplay in milliseconds (3 seconds in this example)
        infinite: true, // Disable infinite looping
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '150px' // Adjust the padding as needed for the responsive view
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px' // Adjust the padding as needed for the responsive view
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10px' // Adjust the padding as needed for the responsive view
                }
            }
        ]
    });
});


/* WHATSAPP */

// Obtener elementos del DOM
const button = document.getElementById('whatsapp-icon');
const chatBox = document.getElementById('whatsapp-chat');
const closeButton = document.getElementById('whatsapp-close');
const sendButton = document.getElementById('whatsapp-send');
const messageInput = document.getElementById('whatsapp-message-input');

// Función para abrir o cerrar el chat
function toggleChat() {
    chatBox.classList.toggle('open');
}

// Función para enviar el mensaje a WhatsApp
function sendMessage() {
    const phoneNumber = '+51913479416'; // Reemplaza con tu número de teléfono
    const message = messageInput.value;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.location.href = whatsappURL;
}

// Evento click en el botón de WhatsApp
button.addEventListener('click', toggleChat);

// Evento click en el botón de cerrar
closeButton.addEventListener('click', toggleChat);

// Evento click en el botón de enviar
sendButton.addEventListener('click', sendMessage);


// PÁGINA PAQUETE CUMPLEAÑERO //

$(document).ready(function () {
    var $carousel = $('.carousel');
    var $thumbnails = $('.thumbnails');
    var $arrowUp = $('.arrow-up');
    var $arrowDown = $('.arrow-down');
    var $modal = $('#modal');
    var $modalContent = $('.modal-content');
    var $modalImage = $modalContent.find('img');
    var $modalClose = $('.close');

    $carousel.slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        asNavFor: '.thumbnails'
    });

    $thumbnails.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.carousel',
        focusOnSelect: true,
        prevArrow: '',
        nextArrow: '',
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        scroll: true // Habilitar el desplazamiento con la rueda del mouse
    });

    $arrowUp.click(function () {
        $thumbnails.slick('slickPrev');
    });

    $arrowDown.click(function () {
        $thumbnails.slick('slickNext');
    });

    $carousel.on('click', 'img', function () {
        var imgSrc = $(this).attr('src');
        $modalImage.attr('src', imgSrc);
        $modal.show();
    });

    $modalClose.click(function () {
        $modal.hide();
    });

    $modal.click(function (e) {
        if ($(e.target).hasClass('modal-content')) {
            $modal.hide();
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $modal.hide();
        }
    });

    $('.cuadrado').on('click', function () {
        var imgSrc = $(this).find('img').attr('src');
        $modalImage.attr('src', imgSrc);
        $modal.show();

        // Establecer una escala más grande para la imagen ampliada en el modal
        $modalImage.css('transform', 'scale(1.8)');
    });

    // Desplazamiento del carrusel de thumbnails con la rueda del mouse
    $thumbnails.on('wheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $thumbnails.slick('slickPrev');
        } else {
            $thumbnails.slick('slickNext');
        }
    });
});

// PÁGINA ZONA GAMER //

// PLATOS //

function openCategory(categoryName) {
    const categories = document.getElementsByClassName("categoria");
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = "none";
    }

    const tabs = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(categoryName).style.display = "grid";
    const activeTab = document.querySelector(`[onclick="openCategory('${categoryName}')"]`);
    activeTab.classList.add("active");
}

/* INFO CONTAINER */

let currentType = null;

// Función para mostrar u ocultar el contenedor de información correspondiente al botón presionado
function toggleInfo(type) {
    const infoContainer = document.getElementById(`info-${type}`);

    // Si el contenedor ya está visible y es el mismo botón, lo ocultamos
    if (currentType === type) {
        infoContainer.style.transform = 'translateX(-100%)';
        infoContainer.style.pointerEvents = 'none';
        currentType = null;
    } else {
        // Ocultar el contenedor previo si existe
        if (currentType) {
            const prevInfoContainer = document.getElementById(`info-${currentType}`);
            prevInfoContainer.style.transform = 'translateX(-100%)';
            prevInfoContainer.style.pointerEvents = 'none';
        }

        // Obtener el ancho de la ventana
        const windowWidth = window.innerWidth;

        // Mostrar el contenedor actual con el valor adecuado de translateX
        if (windowWidth < 769) {
            infoContainer.style.transform = 'translateX(0px)';
        } else {
            infoContainer.style.transform = 'translateX(80px)';
        }

        infoContainer.style.pointerEvents = 'auto';
        currentType = type;
    }
}


// CARRUSEL IMAGENES //

$(document).ready(function () {
    $('.carousel-imagenes').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Siguiente</button>',
        centerMode: true,
        centerPadding: '100px', // Adjust the padding as needed to control the size of the cards on the sides
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the time interval for autoplay in milliseconds (3 seconds in this example)
        infinite: true, // Disable infinite looping
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '150px' // Adjust the padding as needed for the responsive view
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px' // Adjust the padding as needed for the responsive view
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px' // Adjust the padding as needed for the responsive view
                }
            }
        ]
    });
});

// CARRUSEL OFRECER //

$(document).ready(function () {
    $('.carousel-ofrecer').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Siguiente</button>',
        centerMode: true,
        centerPadding: '100px', // Adjust the padding as needed to control the size of the cards on the sides
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the time interval for autoplay in milliseconds (3 seconds in this example)
        infinite: true, // Disable infinite looping
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '150px' // Adjust the padding as needed for the responsive view
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px' // Adjust the padding as needed for the responsive view
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px' // Adjust the padding as needed for the responsive view
                }
            }
        ]
    });
});

// HORA DINÁMICA //

function actualizarHora() {
    const fecha = new Date();
    const hora = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');

    document.getElementById('hora').textContent = hora;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

function verificarEstadoHorario(horaApertura, horaCierre, diasPermitidos) {
    setInterval(() => {
        actualizarHora();
        const rectangulo = document.getElementById('rectangulo');
        const estadoTexto = document.getElementById('estadoTexto');

        const horaActual = new Date().getHours();
        const diaSemana = new Date().getDay();

        // Verificar si el día actual está dentro de los días permitidos
        const diaPermitido = diasPermitidos.includes(diaSemana);

        if (diaPermitido && horaActual >= horaApertura && horaActual < horaCierre) {
            rectangulo.classList.add('abierto');
            rectangulo.classList.remove('cerrado');
            estadoTexto.textContent = 'ABIERTO';
        } else {
            rectangulo.classList.add('cerrado');
            rectangulo.classList.remove('abierto');
            estadoTexto.textContent = 'CERRADO';
        }
    }, 1000);
}
