const toggleonClickPlusHighlight = (el1, el2) => {
  el1.click ( () => {
    el2.toggle();
    el1.toggleClass("menu-item-shown");
  });
};

const mainMenuItems = $('.main-menu-items').children();

mainMenuItems.each ( (item) => {
  let itemMenuClass = item.attr('class').replace('li', 'menu');
  let itemMenu = $(itemMenuClass);
  toggleonClickPlusHighlight(item, itemMenu);
});








const toggleOnClick = (el1, el2, el3) => {
  el1.click( () => {
    el2.toggle();
    el3.toggle();
  });
};
