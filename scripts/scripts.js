// Obtén una referencia a los enlaces del menú de navegación
const navLinks = document.querySelectorAll('.navbar-custom .navbar-nav .nav-link');

// Agrega un evento click a cada enlace
navLinks.forEach(navLink => {
  navLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página
    const href = navLink.getAttribute('href');
    if (href) {
      window.location.href = href; // Redirecciona a la URL especificada por el enlace
    }
  });
  
  navLink.addEventListener('mouseenter', () => {
    navLink.classList.add('bounce');
  });

  navLink.addEventListener('mouseleave', () => {
    navLink.classList.remove('bounce');
  });
});