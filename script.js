const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1; // Aquí no se afecta a .paper

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');
    
    // Cambiar el z-index temporalmente para permitir el scroll
    paperElement.style.zIndex = 1; 

    // animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');

  // Cambiar el z-index antes de la animación de cierre
  paperElement.style.zIndex = -1; // Cambio inmediato del z-index

  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0; // Aquí no se afecta a .paper
    coverElement.classList.remove('open-cover');

    // animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});
