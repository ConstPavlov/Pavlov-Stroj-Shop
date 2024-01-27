new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  keyboard: {
    enabled: true,

    onlyInViewport: true,

    pageUpDown: true,
  },

  autoHeight: true,

    autoplay: {
      delay: 5000,
    },

  loop: true,

  speed: 1000,


});