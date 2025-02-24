document.addEventListener("DOMContentLoaded", function () {
  const selectedCityDisplay = document.getElementById("selected-city");

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function updateCity(city) {
    selectedCityDisplay.innerText = city;
    selectedCityDisplay.setAttribute("data-city", city);
    setCookie("selectedCity", city, 7); // Сохраняем город в cookie на 7 дней
    closeModal();
    Fancybox.close();
  }

  function closeModal() {
    const closeButtons = document.querySelectorAll(".carousel__button.is-close, .fancybox-close-small");
    closeButtons.forEach(button => button.click());
  }

  // Обработчик кликов по ссылкам с городами
  document.querySelectorAll(".city-list a").forEach(function (cityLink) {
    cityLink.addEventListener("click", function () {
      const city = cityLink.getAttribute("data-city");
      updateCity(city);
    });
  });

  // Реализация поиска городов
  document.getElementById("city-search").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const countryHeaders = document.querySelectorAll(".country-header");

    countryHeaders.forEach(function (header) {
      const cities = header.nextElementSibling.querySelectorAll("a");
      let hasVisibleCity = false;

      cities.forEach(function (cityLink) {
        const city = cityLink.innerText.toLowerCase();
        if (city.includes(searchTerm)) {
          cityLink.style.display = "inline";
          hasVisibleCity = true;
        } else {
          cityLink.style.display = "none";
        }
      });

      // Скрыть или показать страну в зависимости от наличия видимых городов
      header.style.display = hasVisibleCity ? "block" : "none";
      header.nextElementSibling.style.display = hasVisibleCity ? "flex" : "none";
    });
  });

  const savedCity = getCookie("selectedCity");
  if (savedCity) {
    selectedCityDisplay.innerText = savedCity;
    selectedCityDisplay.setAttribute("data-city", savedCity);
  } else {
    fetchLocation();
  }

  function fetchLocation() {
    fetch("https://ipinfo.io?token=4b424d02e0f941")
      .then(response => response.json())
      .then(data => {
        const loc = data.loc.split(",");
        const lat = loc[0];
        const lon = loc[1];
        const openStreetMapUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1&accept-language=ru`;

        return fetch(openStreetMapUrl);
      })
      .then(response => response.json())
      .then(data => {
        const city = data.address.city || data.address.town || data.address.village || "Город не определен";
        selectedCityDisplay.innerText = city;
        document.getElementById("city-name").innerText = city;
        const cityConfirmation = document.getElementById("city-confirmation");
        cityConfirmation.style.display = "block";
        cityConfirmation.classList.add("active");
      })
      .catch(() => {
        selectedCityDisplay.innerText = "Ошибка при определении города";
      });

    document.getElementById("confirm-city").addEventListener("click", function () {
      document.getElementById("city-confirmation").style.display = "none";
    });
  }

  document.querySelectorAll(".header-top__modal-city, .city-confirmation__button").forEach(button => {
    button.addEventListener("click", function () {
      document.getElementById("city-confirmation").style.display = "none";
    });
  });
});