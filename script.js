const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  const heartElement = document.querySelector('.heart');

  // Abrir la carta (rotar la tapa)
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1; // La tapa pasa al fondo

    // Abrir el papel (subir la carta)
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');
    paperElement.style.zIndex = 1; // Hacer scroll en el papel

    // Mostrar el corazón (animación)
    heartElement.style.display = 'block';
  }, 500); // Tiempo sincronizado con la animación de la tapa
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  const heartElement = document.querySelector('.heart');

  // Cerrar el papel (bajar la carta)
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  // Retrasar el cambio del z-index para completar la animación
  setTimeout(() => {
    paperElement.style.zIndex = -1; // Ocultar el papel debajo de la tapa

    // Regresar la tapa al frente
    coverElement.style.zIndex = 2;
    coverElement.classList.remove('open-cover');

    // Ocultar el corazón
    heartElement.style.display = 'none';
  }, 500); // Tiempo sincronizado con la animación del papel
});
