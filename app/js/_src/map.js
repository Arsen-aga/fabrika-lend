// map

function lazyLoadMap() {
  // Проверяем, есть ли элемент с id "map" на странице
  var mapElement = document.getElementById("map");
  if (mapElement) {
    // Создаем экземпляр Intersection Observer
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Когда элемент видим на экране, загружаем API Яндекс карты асинхронно
          var script = document.createElement("script");
          script.src =
            "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=0333b546-e4cd-4422-b583-f1193f0144a4&_v=20240321151130";
          script.async = true;
          script.onload = function () {
            // Когда скрипт загружен, вызываем функцию инициализации карты
            ymaps.ready(initializeMap);
          };
          document.body.appendChild(script);
          // Отключаем наблюдение за элементом, чтобы не загружать карту повторно при последующих доскроллах
          observer.unobserve(mapElement);
        }
      });
    });

    // Начинаем наблюдение за элементом
    observer.observe(mapElement);
  }
}

function initializeMap() {
  var map1Coords = [55.658043, 37.287064];
  var map2Coords = [54.559025, 36.264036];

  ymaps.ready(function () {
    var maps = [];

    var map1 = new ymaps.Map(
      "map",
      {
        center: map1Coords,
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    var map2 = new ymaps.Map(
      "map2",
      {
        center: map2Coords,
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    maps.push(map1, map2);

    var destinations = {
      "Московская область, улица Маковского, 7с8, Одинцово": map1Coords,
      "г. Калуга, ул. Московская, д. 287А": map2Coords,
    };

    var myPlacemark1 = new ymaps.Placemark(
      destinations["Московская область, улица Маковского, 7с8, Одинцово"],
      {
        hintContent: "Офис FACTORY TENTS",
        balloonContent: "Московская область, улица Маковского, 7с8, Одинцово",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../images/marker.webp",
        iconImageSize: [30, 35],
        iconImageOffset: [-5, -38],
      }
    );

    var myPlacemark2 = new ymaps.Placemark(
      destinations["г. Калуга, ул. Московская, д. 287А"],
      {
        hintContent: "Производство FACTORY TENTS",
        balloonContent: "г. Калуга, ул. Московская, д. 287А",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../images/marker.webp",
        iconImageSize: [30, 35],
        iconImageOffset: [-5, -38],
      }
    );

    map1.geoObjects.add(myPlacemark1);
    map2.geoObjects.add(myPlacemark2);

    maps.forEach(function (map) {
      var center = map.getGlobalPixelCenter();
      center = [
        center[0] + 50, // Смещаем по горизонтали на 30 пикселей
        center[1],
      ];
      map.panTo(
        map.options.get("projection").fromGlobalPixels(center, map.getZoom())
      );
    });

    maps.forEach(function (map) {
      map.behaviors.disable("scrollZoom");

      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        map.behaviors.disable("drag");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", lazyLoadMap);
// Обработчик события для кнопок
var buttons = document.querySelectorAll(".map-block__button");
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Удаляем класс map-block__button_active у всех кнопок
    buttons.forEach(function (btn) {
      btn.classList.remove("map-block__button_active");
    });

    // Добавляем класс map-block__button_active к нажатой кнопке
    button.classList.add("map-block__button_active");

    var maps = document.querySelectorAll('.map-block__map > div[id^="map"]');
    maps.forEach(function (map, i) {
      if (index === i) {
        map.style.display = "block";
      } else {
        map.style.display = "none";
      }
    });
    var contacts = document.querySelectorAll(".map-block__contacts-inner");
    contacts.forEach(function (contact, i) {
      if (index === i) {
        contact.style.display = "flex";
      } else {
        contact.style.display = "none";
      }
    });
  });
});
