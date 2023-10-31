window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function () {
  let hamburguer;
  let menuPanel;
  let closeButton;
  let faqItems;
  let modal;
  let modalContent;
  let closeModal;

  function initializeHamburguer() {
    hamburguer = document.querySelector(".hamburguer");
    menuPanel = document.getElementById("menuPanel");
    closeButton = document.querySelector("#menuPanel .close-button");

    hamburguer.addEventListener("click", function () {
      menuPanel.classList.add("open");
    });

    closeButton.addEventListener("click", function () {
      menuPanel.classList.remove("open");
    });
  }



  function initializeModal() {
    modal = document.getElementById("modal");
    modalContent = document.getElementById("modal-img");
    closeModal = document.getElementById("close-modal");

    // Abrir el modal cuando se haga clic en una imagen
    const images = document.querySelectorAll(".image img");
    images.forEach((image) => {
      image.addEventListener("click", function () {
        modal.style.display = "flex";
        modalContent.src = this.src;
        modal.classList.add("active");
      });
    });

    // Cerrar el modal al hacer clic en el botón de cierre (X)
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
      modal.classList.remove("active");
    });
  }

  // Función para inicializar preguntas y respuestas
  function initializeFAQ() {
    faqItems = document.querySelectorAll('.faq-item');

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
  }


  // Función para introducir una pausa (delay) antes de completar una transición
  function delay(n) {
    n = n || 700; // Puedes ajustar la duración del retraso aquí
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  // Función para obtener un color aleatorio de una lista de colores
  function getRandomColor() {
    const colors = ["#EC2127", "#EA0B8B", "#F58220", "#FFD200", "#77C043", "#2BABE2", "#724C9F", "#432F87"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  // Función para manejar la transición de la página
  function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
      duration: 0.5,
      width: "100%",
      left: "0%",
      ease: "Expo.easeInOut",
      backgroundColor: getRandomColor(),
      onComplete: function () {
        gsap.to(".loading-image", { opacity: 1, duration: 0.1 });
      }
    });

    tl.to(".loading-screen", {
      duration: 0.5,
      width: "100%",
      left: "100%",
      ease: "Expo.easeInOut",
      delay: 0.2
    });
    tl.set(".loading-screen", { left: "-100%" });
  }

  // Función para animar el contenido de la página
  function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
      duration: 0.4,
      y: 30,
      opacity: 0,
      stagger: 0.4,
      delay: 0.2,
      onComplete: function () {
        initializeHamburguer(); // Inicializar hamburguesa
        initializeFAQ(); // Inicializar preguntas y respuestas
        initializeModal();
      }
    });
  }

  // Ejecutar la animación de transición
  pageTransition();

  // Configuración de Barba.js
  barba.init({
    sync: true,
    transitions: [
      {
        async leave(data) {
          const done = this.async();
          pageTransition();
          await delay(500);
          done();
        },

        async enter(data) {
          contentAnimation();
        },

        async once(data) {
          contentAnimation();
        },
      },
    ],
  });
});


function toggleDropdown() {
  var dropdown = document.querySelector(".dropdown-content");
  var buttons = document.querySelector(".buttons");

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    buttons.classList.remove("open");
  } else {
    dropdown.style.display = "block";
    buttons.classList.add("open");
  }

  // Agregar un event listener para cerrar el dropdown cuando se hace clic fuera de él
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !buttons.contains(event.target)) {
      // El clic ocurrió fuera del dropdown y los botones
      dropdown.style.display = "none";
      buttons.classList.remove("open");
    }
  });
}


// Obtenemos el elemento de audio y el botón de reproducción
var playButton = document.getElementById('play-button');
var audio = new Audio('Audio/ytmp3free.cc_vacilandia-park-el-parque-acuatico-mas-grande-de-lima-youtubemp3free.org.mp3');
var isPlaying = false;

function closeCard() {
  // Detenemos la música y ocultamos la tarjeta al hacer clic en el botón de cierre
  audio.pause();
  document.getElementById('music-card').style.display = 'none';
}

function playMusic() {
  if (!isPlaying) {
    // Reproducimos la música cuando se presiona el botón de reproducción
    audio.play();
    playButton.getElementsByTagName('svg')[0].style.display = 'none'; // Ocultar el primer SVG (reproducción)
    playButton.getElementsByTagName('svg')[1].style.display = 'inline'; // Mostrar el segundo SVG (pausa)
    isPlaying = true;
  } else {
    // Pausamos la música cuando se presiona nuevamente el botón de reproducción
    audio.pause();
    playButton.getElementsByTagName('svg')[0].style.display = 'inline'; // Mostrar el primer SVG (reproducción)
    playButton.getElementsByTagName('svg')[1].style.display = 'none'; // Ocultar el segundo SVG (pausa)
    isPlaying = false;
  }
}




/* CARTA */



function showOverlay(event) {
  const card = event.currentTarget.closest(".card");
  const overlay = card.querySelector(".overlay");

  // Añadir la clase 'active' al overlay
  overlay.classList.add("active");

  // Establecer la altura y la opacidad deseada
  overlay.style.height = "220px";
  overlay.style.opacity = 1;

  // Obtener el botón de cierre (X) dentro del overlay
  const closeButton = overlay.querySelector(".close-button");

  // Agregar un evento clic al botón de cierre
  closeButton.addEventListener("click", function () {
    // Establecer la altura y la opacidad deseada
    overlay.style.height = "0px";
    overlay.style.opacity = 0;
  });
}





// Función para cambiar la pestaña activa
function changeTab(tabIndex) {
  // Obtener todas las pestañas y el contenido de las pestañas
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  // Desactivar todas las pestañas y ocultar su contenido
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
    tabContents[i].classList.remove('active');
  }

  // Activar la pestaña seleccionada y mostrar su contenido
  tabs[tabIndex - 1].classList.add('active');
  tabContents[tabIndex - 1].classList.add('active');
}



function toggleInfo(infoNumber) {
  const targetClass = `info-${infoNumber}`;
  const infoContainers = document.querySelectorAll(`.${targetClass}`);

  // Verificar si el contenedor está activo o inactivo
  const isOpen = infoContainers[0].classList.contains('active');

  // Cerrar todos los contenedores activos
  const allInfoContainers = document.querySelectorAll('.info-container');
  allInfoContainers.forEach(container => {
    container.classList.remove('active');
  });

  // Abrir el contenedor si no estaba abierto previamente
  if (!isOpen) {
    infoContainers[0].classList.add('active');
  }

  // Evitar la propagación del evento para que no afecte al modal de imagen
  event.stopPropagation();
}

function closeInfo(infoNumber) {
  const targetClass = `info-${infoNumber}`;
  const infoContainer = document.querySelector(`.${targetClass}`);

  // Cerrar el contenedor
  infoContainer.classList.remove('active');
}



function openModal(imageSrc) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");

  modal.style.display = "block";
  modalImg.src = imageSrc;

  // Agrega una clase "active" para aplicar estilos específicos a la modal
  modal.classList.add("active");
}

// Función para cerrar la modal
function closeModal() {
  var modal = document.getElementById("modal");

  modal.style.display = "none";

  // Remueve la clase "active" para ocultar la modal
  modal.classList.remove("active");
}

// Agrega un evento clic a cada imagen de la galería
var images = document.querySelectorAll(".image img");
images.forEach(function (image) {
  image.addEventListener("click", function () {
    openModal(this.src);
  });
});

// Agrega un evento clic para cerrar la modal al hacer clic en la "X"
var closeModalButton = document.getElementById("close-modal");
closeModalButton.addEventListener("click", closeModal);

// Agrega un evento clic para cerrar la modal al hacer clic fuera de la imagen
window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    closeModal();
  }
});
