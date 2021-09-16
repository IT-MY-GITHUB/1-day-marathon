
function slidesPlugin(slideId = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[slideId].classList.add('active');

  slides.forEach((el) => {
    if (!el.classList.contains("active")) {
      el.setAttribute("title", el.children[0].textContent);
    }
    el.addEventListener("click", () => {
      slides.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("title", item.children[0].textContent);
      });
      el.classList.add("active");
      el.removeAttribute("title");
    });
  });
}

slidesPlugin();
