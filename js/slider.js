const sliderItems = document.querySelectorAll('.slider-item');

sliderItems.forEach(item => {
  const link = item.querySelector('a');

  item.addEventListener('click', () => {
    window.location.href = link.href;
  });
});