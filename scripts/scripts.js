// Elimina el código JavaScript anterior relacionado con el evento click
// ...

// Agrega un evento hover a cada botón
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseenter', () => {
      navLink.classList.add('bounce');
    });
  
    navLink.addEventListener('mouseleave', () => {
      navLink.classList.remove('bounce');
    });
  });
  