(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-tablet-menu-open]'),
    closeMenuBtn: document.querySelector('[data-tablet-menu-close'),
    modal: document.querySelector('[data-tablet-menu]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.modal.classList.toggle('header__nav-menu--is-hidden');
  }
})();
