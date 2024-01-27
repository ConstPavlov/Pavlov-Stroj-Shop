"use strict"

const iconMenu = document.querySelector('.header__burger');
const subItem = document.querySelector('.sub-li');
const subList = document.querySelector('.header__sub-list');


const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch')
  console.log('mob')

  let menuArrows = document.querySelectorAll('.header__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle('ar_active');
      })
    }
  }

} else {
  document.body.classList.add('_pc');
}
// function checkSubMenu(){
//   if (!iconMenu.classList.contains('_active')){
    
//   }
// }


// let menuArrows = document.querySelectorAll('.header__arrow');
// if (menuArrows.length > 0) {
//   for (let index = 0; index < menuArrows.length; index++) {
//     const menuArrow = menuArrows[index];
//     menuArrow.addEventListener("click", function (e) {
//       menuArrow.parentElement.classList.toggle('ar_active');
//     })
//   }

// Бургер
if (iconMenu){
  const menu = document.querySelector('.header__nav');
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menu.classList.toggle('_active')
    if (!iconMenu.classList.contains('_active')){
      const isHaveArr = document.querySelector('.ar_active');
      subList.classList.remove('active_sub');
      isHaveArr.classList.remove('ar_active')
    };
  })
}
// Доп
  subItem.addEventListener("click", function (e) {
    subList.classList.toggle('active_sub');
  })
    
    

  // const subL = element.classList.contains('header__sub-list')
  // subL.addEventListener('click', function(e){
  //   subList.classList.toggle('active--sub')
// Прокрутка при клике

const anchors = document.querySelectorAll('.anchor[data-goto]');
if (anchors.length > 0){
  anchors.forEach(anchor => {
    anchor.addEventListener("click", onAnchorClick)
  });
  function onAnchorClick(e){
    const anchor = e.target;
    if(anchor.dataset.goto && document.querySelector(anchor.dataset.goto)){
      const gotoBlock = document.querySelector(anchor.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}