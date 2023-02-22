(function() {
  let swiper = new Swiper ('.swiper', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,    
        navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      
        // when window width is >= 300px
    300: {
        slidesPerView: 1,
        spaceBetween: 10
      },
        // when window width is >= 480px
    481: {
        slidesPerView: 1,
        spaceBetween: 10
      },
    // when window width is >= 320px
    650: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 320px
    850: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    // when window width is >= 1640px
    1640: {
      slidesPerView: 3,
      spaceBetween: 35
    },
    // when window width is >= 1840px
    1840: {
        slidesPerView: 4,
        spaceBetween: 35
      }
  }
});
})();




// export default Swiper;