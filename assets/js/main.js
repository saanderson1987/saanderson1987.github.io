
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
    $('.project-box').hide();
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

  $('.music-flashcards-link').click( () => {
    $('.projects-menu').toggle();
    $('.music-flashcards').toggle();
  });

  $('.taag-link').click( () => {
    $('.projects-menu').toggle();
    $('.taag').toggle();
  });

  $('.text-annotator-link').click( () => {
    $('.projects-menu').toggle();
    $('.text-annotator').toggle();
  });

  $('.tic-tac-toe-link').click( () => {
    $('.projects-menu').toggle();
    $('.tic-tac-toe').toggle();
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
      !($('.taag').is(e.target)) &&
      ($('.taag').has(e.target).length === 0)
      && !($('.taag-link').is(e.target))
      && ($('.taag-link').has(e.target).length === 0)
    ) {
      $('.taag').hide();
    }
  });

  $(document).click ( (e) => {
    if (
      !($('.tic-tac-toe').is(e.target)) &&
      ($('.tic-tac-toe').has(e.target).length === 0)
      && !($('.tic-tac-toe-link').is(e.target))
      && ($('.tic-tac-toe-link').has(e.target).length === 0)
    ) {
      $('.tic-tac-toe').hide();
    }
  });

  $(document).click ( (e) => {
    if (
      !($('.music-flashcards').is(e.target)) &&
      ($('.music-flashcards').has(e.target).length === 0)
      && !($('.music-flashcards-link').is(e.target))
      && ($('.music-flashcards-link').has(e.target).length === 0)
    ) {
      $('.music-flashcards').hide();
    }
  });

  $(document).click ( (e) => {
    if (
      !($('.text-annotator').is(e.target)) &&
      ($('.text-annotator').has(e.target).length === 0)
      && !($('.text-annotator-link').is(e.target))
      && ($('.text-annotator-link').has(e.target).length === 0)
    ) {
      $('.text-annotator').hide();
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
