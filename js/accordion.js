const HIDDEN = 'accordion/shown';
const SHOWN = 'accordion/hidden';
const BEFORE_SHOW = 'accordion/beforeshow';
const BEFORE_HIDE = 'accordion/beforehide';

const DURATION = 250;

const $ = window.$;

// $(document).on('click', 'problem', function (e) {
//   e.preventDefault();

//   const button = $(this);
//   const block = button.parents('.problem');
//   const body = block.find('.problem__body');
//   const isActive = Number(block.hasClass('is-active'));
//   const isMultiple = block.parents('.accordions').data('accordion-multiple');

//   if (block.hasClass('is-disabled')) {
//     return;
//   }

//   const beforeEvent = [BEFORE_SHOW, BEFORE_HIDE][isActive];
//   const afterEvent = [SHOWN, HIDDEN][isActive];

//   body.trigger(beforeEvent).slideToggle(DURATION, () => {
//     block
//       .toggleClass('is-active')
//       .trigger(afterEvent);
//   });

//   if (!isMultiple) {
//     const siblings = block.siblings('.problem.is-active');

//     siblings
//       .trigger(BEFORE_HIDE)
//       .find('.problem__body')
//       .slideUp(DURATION, () => {
//         siblings
//           .removeClass('is-active')
//           .trigger(HIDDEN);
//       });
//   }
// });
document.addEventListener('click', slideToggle);

function slideToggle(e) {
  e.preventDefault();

  if ($(e.target).hasClass('problem__header')) {
    const body = $(e.target).siblings('.problem__body'),
      parent = $(e.target).parent();

    $(body).slideToggle();

    $(parent).hasClass('is-active') ? $(parent).removeClass('is-active') : $(parent).addClass('is-active');
  };
};