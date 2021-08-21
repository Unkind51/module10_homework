let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  alert(`Ширина экрана: ${screen.width}, высота: ${screen.height}`);
})