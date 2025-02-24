if (document.querySelector("#how-we-work-modal")) {
  const links = document.querySelectorAll('[href="#how-we-work-modal"]');
  const modal = document.querySelector("#how-we-work-modal");
  links?.forEach((link) =>
    link.addEventListener("click", () => openModal(link, modal))
  );

  function openModal(link, modal) {
    const linkObj = {
      src: link.querySelector("img").src,
      alt: link.querySelector("img").alt,
      title: link.querySelector(".main-slider__main-text").textContent,
      text: link.querySelector(".main-slider__text").textContent,
    };

    modal.querySelector("img").src = linkObj.src;
    modal.querySelector("img").alt = linkObj.alt;
    modal.querySelector("h4").textContent = linkObj.title;
    modal.querySelector("p").textContent = linkObj.text;
  }
}
