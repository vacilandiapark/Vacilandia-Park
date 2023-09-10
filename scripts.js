

// POSICIONAMIENTO DE ID //

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

        // Muestra u oculta la "x" de cierre según el estado del subpanel
        if ($('#menuPanel').hasClass('open')) {
            $('.close-button').show();
        } else {
            $('.close-button').hide();
        }
    });

    // Agrega un evento click a la "x" para cerrar el panel
    $('.close-button').click(function () {
        $('#menuPanel').removeClass('open');
        $('.close-button').hide();
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
        $modalImage.css('transform', 'scale(1.2)');
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
            infoContainer.style.transform = 'translateX(70px)';
        }

        infoContainer.style.pointerEvents = 'auto';
        currentType = type;
    }
}

function closeInfoContainer(type) {
    const infoContainer = document.getElementById(`info-${type}`);
    infoContainer.style.transform = 'translateX(-100%)';
    infoContainer.style.pointerEvents = 'none';
    currentType = null;
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


// JavaScript para el efecto Parallax al hacer scroll //
document.addEventListener('DOMContentLoaded', function () {
    const bannerVideo = document.querySelector(".ofertas-carousel img");
    const bannerHeight = document.querySelector(".banner").clientHeight;

    window.addEventListener("scroll", function () {
        const scrollPosition = window.pageYOffset;
        const parallax = -scrollPosition / 3;
        bannerVideo.style.transform = `translateY(${parallax}px)`;
    });
});

// PREGUNTAS Y RESPUESTAS //
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answerWrapper = item.querySelector('.answer-wrapper');

        item.classList.add('closed'); // Agregamos la clase "closed" por defecto

        question.addEventListener('click', () => {
            if (!item.classList.contains('active')) {
                // Abrir la pregunta
                closeAllQuestions();
                item.classList.add('active');
                item.classList.remove('closed');
                answerWrapper.style.maxHeight = answerWrapper.scrollHeight + 'px';
            } else {
                // Cerrar la pregunta
                item.classList.remove('active');
                item.classList.add('closed');
                answerWrapper.style.maxHeight = '0';
            }
        });
    });

    function closeAllQuestions() {
        faqItems.forEach(item => {
            const answerWrapper = item.querySelector('.answer-wrapper');
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                item.classList.add('closed');
                answerWrapper.style.maxHeight = '0';
            }
        });
    }
});

// SUB PANEL //
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.sub-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.sub-question');
        const answerWrapper = item.querySelector('.sub-answer-wrapper');

        item.classList.add('closed'); // Agregamos la clase "closed" por defecto

        question.addEventListener('click', () => {
            if (!item.classList.contains('active')) {
                // Abrir la pregunta
                closeAllQuestions();
                item.classList.add('active');
                item.classList.remove('closed');
                answerWrapper.style.maxHeight = answerWrapper.scrollHeight + 'px';
            } else {
                // Cerrar la pregunta
                item.classList.remove('active');
                item.classList.add('closed');
                answerWrapper.style.maxHeight = '0';
            }
        });
    });

    function closeAllQuestions() {
        faqItems.forEach(item => {
            const answerWrapper = item.querySelector('.sub-answer-wrapper');
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                item.classList.add('closed');
                answerWrapper.style.maxHeight = '0';
            }
        });
    }
});

/* PARALLAX SCROLLING*/

const iframe = document.querySelector('.scrolling-iframe');
const iframeStyles = window.getComputedStyle(iframe);
const initialPosition = iframe.getBoundingClientRect().top + window.scrollY - parseFloat(iframeStyles.marginTop);

function updateIframePosition() {
    const currentScrollY = window.scrollY;
    const offsetY = currentScrollY - initialPosition;

    iframe.style.transform = `translateY(${offsetY}px)`;
}

window.addEventListener('scroll', updateIframePosition);


/* NUEVO CARRUSEL */

var swiperEl = document.querySelector(".promobanner");
Object.assign(swiperEl, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
swiperEl.initialize()

/* OCULTAR EL BOTÓN */

const hideButton = document.getElementById('hideButton');
const rectangulo = document.querySelector('.rectangulo');

hideButton.addEventListener('click', () => {
    rectangulo.style.opacity = '0';
});


// PARTICULAS //

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 1,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});