const btn = document.querySelector('#btn');
const arrow_circle = document.querySelector('.arrow_circle');
const arrow_fill = document.querySelector('.arrow_fill');

let iconChanging = false

btn.addEventListener('click', () => {
  if (iconChanging) {
        arrow_circle.style.display = "none";
        arrow_fill.style.display = "inline";
    } else {
        arrow_circle.style.display = "inline";
        arrow_fill.style.display = "none";
    }
	iconChanging = !iconChanging;
})

