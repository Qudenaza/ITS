document.addEventListener('click', slideToggle);

function slideToggle(e) {
  if ($(e.target).hasClass('problem__header')) {
    e.preventDefault();

    const body = $(e.target).siblings('.problem__body'),
      parent = $(e.target).parent();

    $(body).slideToggle();

    $(parent).hasClass('is-active') ? $(parent).removeClass('is-active') : $(parent).addClass('is-active');
  };
};