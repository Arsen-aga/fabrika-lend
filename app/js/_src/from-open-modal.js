if (document.querySelectorAll('[href="#callback"]').length > 0) {
  const links = document.querySelectorAll('[href="#callback"]');
  const modal = document.querySelector("#callback");
  links.forEach((link) =>
    link.addEventListener("click", () => {
      const parent = link.closest("section, header, footer");

      let title;

      if (parent.classList.contains("footer"))
        title = "Заявка отправлена с подвала сайта";
      else if (parent.classList.contains("header"))
        title = "Заявка отправлена с шапки сайта";
      else title = parent.querySelector("h2, h1")?.textContent;

      const from = modal.querySelector('input[name="from"]');
      from.value = title;
    })
  );
}
