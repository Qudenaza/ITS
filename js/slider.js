//document.addEventListener('DOMContentLoaded', () => {
//setTimeout(
//() => (document.querySelector('.overlay').style.display = 'none'),
// 1000
// );
//});

const slides = document.querySelectorAll('.slider__slide'),
  dots = document.querySelectorAll('.slider__control');

function showSlides(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(
      'slider__control--active',
      ''
    );
  }

  slides[n].style.display = 'block';
  dots[n].className += ' slider__control--active';
}

showSlides(0);

var x = 0;

setInterval(function() {
  showSlides(x++);
  x >= slides.length ? (x = 0) : x;
}, 6000);

$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  autoplay: true,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
