

const toggleOnClick = (el1, el2, el3) => {
  el1.click( () => {
    el2.toggle();
    el3.toggle();
  });
};

const toggleonClickPlusHighlight = (el1, el2) => {
  el1.click ( () => {
    el2.toggle();
    el1.toggleClass("menu-item-shown");
  });
};
