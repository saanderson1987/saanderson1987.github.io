
$(document).ready( () => {

  $('.main-menu-button').click( () => {
    $('.main-menu-items').toggle();
  });

  $('.skills-li').click( () => {
    $('.skills-menu').toggle();
    $('.skills-li').toggleClass("menu-item-shown");
  });

  $('.projects-li').click( () => {
    $('.projects-menu').toggle();
    $('.projects-li').toggleClass("menu-item-shown");
  });

  $('.projects-back').click( () => {
    $('.project-box').toggle();
    $('.projects-menu').toggle();
  });

  $('.quarry-link').click( () => {
    $('.projects-menu').toggle();
    $('.quarry').toggle();
  });

  $('.tracks-link').click( () => {
    $('.projects-menu').toggle();
    $('.tracks').toggle();
  });

  $('.tetris-link').click( () => {
    $('.projects-menu').toggle();
    $('.tetris').toggle();
  });

  $(document).click ( (e) => {
    if (
      !($('.tetris').is(e.target)) &&
      ($('.tetris').has(e.target).length === 0)
      && !($('.tetris-link').is(e.target))
      && ($('.tetris-link').has(e.target).length === 0)
    ) {
      $('.tetris').hide();
    }
  });

  $(document).click ( (e) => {
    if (
      !($('.quarry').is(e.target)) &&
      ($('.quarry').has(e.target).length === 0)
      && !($('.quarry-link').is(e.target))
      && ($('.quarry-link').has(e.target).length === 0)
    ) {
      $('.quarry').hide();
    }
  });

  $(document).click ( (e) => {
    if (
      !($('.tracks').is(e.target)) &&
      ($('.tracks').has(e.target).length === 0)
      && !($('.tracks-link').is(e.target))
      && ($('.tracks-link').has(e.target).length === 0)
    ) {
      $('.tracks').hide();
    }
  });

  $(document).click ( (e) => {
    if (
      !($('.projects-menu').is(e.target)) &&
      ($('.projects-menu').has(e.target).length === 0)
      && !($('.projects-li').is(e.target))
      && ($('.projects-li').has(e.target).length === 0)
      && !($('.projects-back').is(e.target))
      && ($('.projects-back').has(e.target).length === 0)
      && !($('.project-box').is(e.target))
      && ($('.project-box').has(e.target).length === 0)
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
