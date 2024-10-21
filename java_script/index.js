const refs = {
  buttonOpenMenu: document.querySelector(".js-open-menu"),
  buttonCloseMenu: document.querySelector(".js-close-menu"),
  menu: document.querySelector(".js-menu"),
  navCloseMenu: document.querySelector(".js-nav"),
};

refs.buttonOpenMenu.addEventListener("click", () =>
  refs.menu.classList.add("is-open")
);

refs.buttonCloseMenu.addEventListener("click", () =>
  refs.menu.classList.remove("is-open")
);

refs.navCloseMenu.addEventListener("click", () =>
  refs.menu.classList.remove("is-open")
);
