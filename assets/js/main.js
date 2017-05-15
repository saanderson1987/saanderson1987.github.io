
$(document).ready( () => {
  // debugger;
  $('.main-menu-button').click( () => {
    $('.main-menu-items').toggle();
    // $('.bars-container').toggleClass("menu-item-shown");
  });

  $('.skills-li').click( () => {
    $('.skills-menu').toggle();
    $('.skills-li').toggleClass("menu-item-shown");
  });

  $('.projects-li').click( () => {
    $('.projects-menu').toggle();
    $('.projects-li').toggleClass("menu-item-shown");
  });

  $(document).click ( (e) => {
    if (
      !($('.projects-menu').is(e.target)) &&
      ($('.projects-menu').has(e.target).length === 0)
      && !($('.projects-li').is(e.target))
      && ($('.projects-li').has(e.target).length === 0)
    ) {
      $('.projects-menu').hide();
      $('.projects-li').removeClass("menu-item-shown");
    }
  });

  $(document).click ( (e) => {
    if (
      !($('.skills-menu').is(e.target)) &&
      ($('.skills-menu').has(e.target).length === 0)
      && !($('.skills-li').is(e.target))
      && ($('.skills-li').has(e.target).length === 0)
    ) {
      $('.skills-menu').hide();
      $('.skills-li').removeClass("menu-item-shown");
    }
  });

});
