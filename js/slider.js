document.addEventListener('DOMContentLoaded', () => {
  setTimeout(
    () => (document.querySelector('.overlay').style.display = 'none'),
    1000
  );
});

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

setInterval(function () {
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

var navMain = document.querySelector('.user-nav');
var navToggle = document.querySelector('.user-nav__toggle');

navMain.classList.remove('user-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('user-nav--closed')) {
    navMain.classList.remove('user-nav--closed');
    navMain.classList.add('user-nav--opened');
  } else {
    navMain.classList.add('user-nav--closed');
    navMain.classList.remove('user-nav--opened');
  }
});

$('a[href^="#"]').bind('click.smoothscroll', function (e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $('html, body')
    .stop()
    .animate({
        scrollTop: $target.offset().top
      },
      500,
      'swing',
      function () {
        window.location.hash = target;
      }
    );
});

setInterval(function () {
  $('.call-us').hasClass('pause') ? $('.call-us').removeClass('pause') : $('.call-us').addClass('pause');
}, 2000);



$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  if (st > 400) {
    $('.user-nav').removeClass('user-nav--opened').addClass('user-nav--closed');
  }
});

$('.js-form-open').on('click', function () {
  modalOpen();

  $('.user-nav').removeClass('user-nav--opened').addClass('user-nav--closed');
});

$('.js-form-close').on('click', function () {
  modalClose();
});


function modalOpen() {
  $('.form').css('display', 'block');

  $('.call-us').css('display', 'none');

  $('.overlay').addClass('overlay--modal').css('display', 'block');

  freeze();
};

function modalClose() {
  $('.form').css('display', 'none');

  $('.call-us').css('display', 'block');

  $('.overlay').removeClass('overlay--modal').css('display', 'none');

  unfreeze();
};




function freeze() {
  const h = $('html');

  if (h.css('position') !== 'fixed') {
    const top = h.scrollTop() ? h.scrollTop() : $('body').scrollTop();

    if (window.innerWidth > h.width()) {
      h.css('overflow-y', 'scroll');
    }

    h.css({
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: -top,
    });
  }
}

function unfreeze() {
  const h = $('html');

  if (h.css('position') === 'fixed') {
    h.css('position', 'static');

    $('html, body').scrollTop(-parseInt(h.css('top'), 10));
    h.css({
      position: '',
      width: '',
      height: '',
      top: '',
      'overflow-y': '',
    });
  }
}