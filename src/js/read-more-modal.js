(() => {
    const refs = {
      openMenuBtn: document.querySelector('[read-button-open]'),
      closeMenuBtn: document.querySelector('[read-button-close]'),
      menu: document.querySelector('[read-mobile]'),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      document.body.classList.toggle("modal-open");
      refs.menu.classList.toggle("is-hidden");
    }
  })();