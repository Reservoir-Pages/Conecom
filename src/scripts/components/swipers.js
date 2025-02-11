import Swiper from "swiper/bundle";

let initAdvantagesSwiper = false;
let advantagesSwiper;
function advantagesSwiperCard() {
  if (window.innerWidth <= 700) {
    if (!initAdvantagesSwiper) {
      initAdvantagesSwiper = true;
      advantagesSwiper = new Swiper(".advantages__slider", {
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
          nextEl: ".advantages__slider-btn--next",
          prevEl: ".advantages__slider-btn--prev",
        },

        pagination: {
          el: ".advantages__slider-pagination",
          type: "bullets",
        },

        breakpoints: {
          600: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        },
      });
    }
  } else if (initAdvantagesSwiper) {
    advantagesSwiper.destroy();
    initAdvantagesSwiper = false;
  }
}
advantagesSwiperCard();
window.addEventListener("resize", advantagesSwiperCard);

let initDuffbeerSwiper = false;
let duffbeerSwiper;
function duffbeerSwiperCard() {
  if (window.innerWidth <= 700) {
    if (!initDuffbeerSwiper) {
      initDuffbeerSwiper = true;
      duffbeerSwiper = new Swiper(".duffbeer__slider", {
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
          nextEl: ".duffbeer__slider-btn--next",
          prevEl: ".duffbeer__slider-btn--prev",
        },

        pagination: {
          el: ".duffbeer__slider-pagination",
          type: "bullets",
        },

        breakpoints: {
          500: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        },
      });
    }
  } else if (initDuffbeerSwiper) {
    duffbeerSwiper.destroy();
    initDuffbeerSwiper = false;
  }
}
duffbeerSwiperCard();
window.addEventListener("resize", duffbeerSwiperCard);
