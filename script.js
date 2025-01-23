const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');

  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1; // Mueve la tapa detrás del papel

    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    paperElement.style.zIndex = 1; // Asegura que el papel esté interactuable
    paperElement.style.overflowY = 'auto'; // Habilita el scroll en dispositivos móviles

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');

  paperElement.style.zIndex = -1; // Deshabilita la interacción del papel
  paperElement.style.overflowY = 'hidden'; // Evita el scroll cuando está cerrado

  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 2; // Devuelve la tapa al frente
    coverElement.classList.remove('open-cover');

    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});
