// Obtén una referencia al contenedor de la imagen
const mapContainer = document.getElementById('map-container');

// Obtén una referencia a los enlaces del menú de navegación
const navLinks = document.querySelectorAll('.navbar-custom .navbar-nav .nav-link');
// Obtén una referencia a todas las imágenes
const mapImages = document.querySelectorAll('.map-image');

// Agrega un evento click a cada enlace
navLinks.forEach(navLink => {
  navLink.addEventListener('click', (event) => {
    const href = navLink.getAttribute('href');
    if (href) {
      // Si el enlace apunta a otra página, redirige a esa página
      if (href.includes('.html')) {
        window.location.href = href;
      } else {
        event.preventDefault();
        // Elimina la clase "active" de todas las imágenes
        mapImages.forEach(image => {
          image.classList.remove('active');
        });

        // Añade la clase "active" a la imagen correspondiente
        const targetImage = document.getElementById(href.substring(1));
        targetImage.classList.add('active');

        // Desplázate hacia la imagen correspondiente suavemente
        const targetPosition = targetImage.offsetTop;
        mapContainer.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });

  navLink.addEventListener('mouseenter', () => {
    navLink.classList.add('bounce');
  });

  navLink.addEventListener('mouseleave', () => {
    navLink.classList.remove('bounce');
  });
});


// Agrega un evento scroll al contenedor de la imagen
mapContainer.addEventListener('scroll', () => {
  const scrollLeft = mapContainer.scrollLeft;
  const navbar = document.querySelector('.navbar-custom');
  navbar.style.transform = `translateX(${scrollLeft}px)`;
});

// Muestra la imagen activa al cargar la página
window.addEventListener('load', () => {
  showActiveImage();
});

// Muestra la imagen actual en función de la posición del contenedor
function showActiveImage() {
  const scrollPosition = mapContainer.scrollTop;
  mapImages.forEach(image => {
    const imageTop = image.offsetTop;
    const imageBottom = imageTop + image.offsetHeight;
    if (scrollPosition >= imageTop && scrollPosition < imageBottom) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}


// BOTON DE WHATSAPP //

// Obtén una referencia al botón de WhatsApp
const whatsappButton = document.querySelector('.whatsapp-float');

// Variable para controlar el número de saltos realizados
let bounceCount = 0;

// Realiza el rebote inicialmente
performBounce();

// Función para realizar el rebote
function performBounce() {
  if (bounceCount < 2) {
    whatsappButton.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      whatsappButton.style.transform = 'translateY(0)';
      bounceCount++;
      setTimeout(performBounce, 200);
    }, 200);
  } else {
    bounceCount = 0;
    setTimeout(performBounce, 2000);
  }
}

// Inicia la animación de rebote cada 2 segundos
setTimeout(performBounce, 2000);