if (document.querySelectorAll(".bg-swiper")?.length > 0) {
  document.querySelectorAll(".bg-swiper").forEach((swiper) => {
    const prev = swiper.parentElement.querySelector(".swiper-button-prev");
    const next = swiper.parentElement.querySelector(".swiper-button-next");
    new Swiper(swiper, {
      spaceBetween: 15,
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
    });
  });
}
if (document.querySelector(".front-block__swiper")) {
  new Swiper(".front-block__swiper", {
    spaceBetween: 15,
    navigation: {
      nextEl: ".front-block__swiper .swiper-button-next",
      prevEl: ".front-block__swiper .swiper-button-prev",
    },
    pagination: {
      el: ".front-block__swiper .swiper-pagination",
      clickable: true,
    },
  });
}
if (document.querySelectorAll(".swiper-container")?.length > 0) {
  document.querySelectorAll(".swiper-container").forEach((swiperWrapper) => {
    const swiper = swiperWrapper.querySelector(".main-slider");
    const pagination = swiperWrapper.querySelector(".main-slider__pagination");
    const next = swiperWrapper.querySelector(".main-slider__button_next");
    const prev = swiperWrapper.querySelector(".main-slider__button_prev");
    new Swiper(swiper, {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: pagination,
        type: "fraction",
        clickable: true,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        1230: {
          slidesPerView: 3,
        },
        991.98: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        767.98: {
          slidesPerView: 2,
        },
        575.98: {
          slidesPerView: 1.8,
        },
      },
    });
  });
}
if (document.querySelector(".osn-slider")) {
  new Swiper(".osn-slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".osn-slider__arrow_next",
      prevEl: ".osn-slider__arrow_prev",
    },
    centeredSlides: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    breakpoints: {
      991.98: {
        spaceBetween: 70,
      },
      767.98: {
        spaceBetween: 30,
      },
    },
  });
}