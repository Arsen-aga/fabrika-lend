document.querySelectorAll(".form__tz").forEach((form) => {

  const fileInput = form.querySelector(".file");
  const fileNameElement = form.querySelector(".file-name");
  
  if (fileInput && fileNameElement) {
    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      fileNameElement.textContent = file.name;
    });
  }
});
