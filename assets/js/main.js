$(document).ready( () => {





  $('.main-menu-button').click( () => {
    $('.main-menu-items').toggle();
  });

  $('.main-menu-items').on("click", 'li', function() {
    let itemMenuClass = this.className.replace('li', 'menu');
    let itemMenu = $('.' + itemMenuClass);
    itemMenu.toggle();
    if($(window).width() <= 762){
      $('.main-menu-items').toggle();
    }
    $(this).toggleClass("menu-item-shown");
  });


  $('.projects-back').click( () => {
    $('.project-box').toggle();
    $('.projects-menu').toggle();
  });


  $('.project').click( function() {
    let projectPage = '.' + this.classList[1].replace('-link', '');
    $('.projects-menu').toggle();
    $(projectPage).toggle();
  });


  let hideOnClickOff = (e, el1, el2, ...args) => {
    if (
      !(el1.is(e.target)) &&
      (el1.has(e.target).length === 0)
      && !(el2.is(e.target))
      && (el2.has(e.target).length === 0)
    ) {
      el1.hide();
      if (args.length > 0) {
        args[0].removeClass("menu-item-shown");
      }
    }
  };

  $(document).click ( (e) => {
    hideOnClickOff(e, $('.tetris'), $('.tetris-link'));
    hideOnClickOff(e, $('.quarry'), $('.quarry-link'));
    hideOnClickOff(e, $('.tracks'), $('.tracks-link'));
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

  $(document).click ( (e) => {
    if (
      !($('.contact-menu').is(e.target)) &&
      ($('.contact-menu').has(e.target).length === 0)
      && !($('.contact-li').is(e.target))
      && ($('.contact-li').has(e.target).length === 0)
    ) {
      $('.contact-menu').hide();
      $('.contact-li').removeClass("menu-item-shown");
    }
  });

});
