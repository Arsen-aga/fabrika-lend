if (document.querySelectorAll(".bg-swiper")?.length > 0) {
  document.querySelectorAll(".bg-swiper").forEach(swiper => {
    const prev = swiper.parentElement.querySelector(".swiper-button-prev");
    const next = swiper.parentElement.querySelector(".swiper-button-next");
    new Swiper(swiper, {
      spaceBetween: 15,
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
    });
  })
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
if (document.querySelector(".section-3__swiper")) {
  new Swiper(".section-3__swiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
      nextEl: ".section-3__swiper-wrapper .swiper-button-next",
      prevEl: ".section-3__swiper-wrapper .swiper-button-prev",
    },
    pagination: {
      el: ".section-3__swiper-wrapper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      991.8: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}
if (document.querySelector(".section-5__swiper")) {
  new Swiper(".section-5__swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    navigation: {
      nextEl: ".section-5__swiper-wrapper .swiper-button-next",
      prevEl: ".section-5__swiper-wrapper .swiper-button-prev",
    },
    pagination: {
      el: ".section-5__swiper-wrapper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      468: {
        slidesPerView: 2,
      },
      991.8: {
        slidesPerView: 3,
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}
if (document.querySelector(".section-7__swipers")) {
  const swiper = new Swiper(".section-7__thumbswiper", {
    spaceBetween: 10,
    slidesPerView: "auto",
    breakpoints: {
      991.8: {
        slidesPerView: 4,
      },
      1230: {
        slidesPerView: 5,
      },
    },
  });
  new Swiper(".section-7__swiper", {
    navigation: {
      nextEl: ".section-7__swipers .swiper-button-next",
      prevEl: ".section-7__swipers .swiper-button-prev",
    },
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
}
if (document.querySelector(".section-10__swiper")) {
  new Swiper(".section-10__swiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    pagination: {
      el: ".section-10__control .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".section-10__control .swiper-button-next",
      prevEl: ".section-10__control .swiper-button-prev",
    },
  });
}
if (document.querySelector(".section-14__swiper-big")) {
  new Swiper(".section-14__swiper-big", {
    spaceBetween: 5,
    slidesPerView: 1,
    touchMove: false,
    draggable: false,
    pagination: {
      el: ".section-14__control .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".section-14__control .swiper-button-next",
      prevEl: ".section-14__control .swiper-button-prev",
    },
    breakpoints: {
      767.98: {
        slidesPerView: 2,
      },
      991.8: {
        slidesPerView: 3,
      },
    },
  });
}
if (document.querySelectorAll(".section-14__slide").length > 0) {
  const swipers = document.querySelectorAll(".section-14__slide-top");
  if (swipers.length > 0) {
    swipers.forEach((swiperTop) => {
      const top = swiperTop.querySelector(".section-14__swiper");
      const bottom = swiperTop.querySelector(".section-14__thumbswiper");
      const prev = swiperTop.querySelector(
        ".section-14__swiper .swiper-button-prev"
      );
      const next = swiperTop.querySelector(
        ".section-14__swiper .swiper-button-next"
      );

      const thumbSwiper = new Swiper(bottom, {
        spaceBetween: 8,
        slidesPerView: 4,
      });
      new Swiper(top, {
        spaceBetween: 10,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        thumbs: {
          swiper: thumbSwiper,
        },
      });
    });
  }
}
if (document.querySelector(".section-21__swiper")) {
  new Swiper(".section-21__swiper", {
    spaceBetween: 15,
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      991.8: {
        spaceBetween: 30,
      },
    },
  });
}
if (document.querySelector(".section-23__swiper")) {
  new Swiper(".section-23__swiper", {
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: {
      el: ".section-23__swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      468: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      991.8: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}
