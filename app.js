const netflix_open_btn = document.querySelector(".netflix-open-btn");

const netflix_close_btn = document.querySelector(".netflix-close-btn");

const netflix_nav = document.querySelectorAll(".netflix-nav");

netflix_open_btn.addEventListener("click", () => {
  netflix_nav.forEach((nav_el) => {
    nav_el.classList.add("visible");
  });

  netflix_close_btn.addEventListener("click", () => {
    netflix_nav.forEach((nav_el) => {
      nav_el.classList.remove("visible");
    });
  });
});
