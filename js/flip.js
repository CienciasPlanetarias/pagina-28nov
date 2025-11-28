/*este Js sirve para que las flip card puedan girar en dispositivos tactiles*/
/*se usa para la pagina Eclipse.html*/

// Seleccionamos todas las cards

document.querySelectorAll('.card-button').forEach(button => {
  button.addEventListener('click', () => {
    const cardInner = button.closest('.card').querySelector('.card-inner');
    cardInner.classList.toggle('flipped');
  });
});
