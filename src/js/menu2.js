(() => {
  const refs = {
    openMenuBtn: document.querySelector('[tablet-menu-open]'),
    closeMenuBtn: document.querySelector('[tablet-menu-close]'),
    modal: document.querySelector('[tablet-menu]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.modal.classList.toggle('header__nav-menu--is-hidden');
  }
})();
