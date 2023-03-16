(() => {
  const menuBtnRef = document.querySelector("[data-menu-botton]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", () => {
  const closeMenuBtn = document.querySelector('.js-close-menu');
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    
  });
})();