(() => {
  const refs = {
    openModalBtn: document.querySelector("[by-menu-modal-open]"),
    closeModalBtn: document.querySelector("[by-menu-modal-close]"),
    modal: document.querySelector("[by-menu-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();