import "./style.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  const mainSlider = document.getElementById("main-slider");
  const initialSlider = document.getElementById("initial-slider");
  const vendorsSlider = document.getElementById("vendors-slider");

  addNavigationHandlers();

  if (initialSlider) {
    initSlider(initialSlider, 1, 1, 3, 1);
  }

  if (vendorsSlider) {
    initSlider(vendorsSlider, 1, 1, 3, 1);
  }

  if (mainSlider) {
    initMainSlider(mainSlider);
  }
}

const initSlider = (
  el,
  mobileSlidesVisible,
  tabletSlidesVisible,
  desktopSlidesVisible,
  slidesOffset
) => {
  new Swiper(el, {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    direction: "horizontal",
    speed: 400,
    grabCursor: true,
    slidesPerGroup: slidesOffset,
    breakpoints: {
      320: {
        slidesPerView: mobileSlidesVisible,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: tabletSlidesVisible,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: desktopSlidesVisible,
        spaceBetween: 10,
        pagination: false,
      },
      1400: {
        slidesPerView: desktopSlidesVisible,
        spaceBetween: 10,
        pagination: false,
      },
    },
  });
};

const initMainSlider = (dom) => {
  return new Swiper(dom, {
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    direction: "horizontal",
    speed: 400,
    grabCursor: true,
    slidesPerGroup: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
    },
  });
};

const addNavigationHandlers = () => {
  const btnMenu = document.querySelector(".burger-menu");
  const header = document.querySelector(".header");

  if (!btnMenu) {
    return;
  }

  btnMenu.addEventListener("click", () => {
    header.toggleAttribute("data-active");
  });
};
