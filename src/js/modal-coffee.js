(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-coffee-modal-open]"),
    closeModalBtn: document.querySelector("[data-coffee-modal-close]"),
    modal: document.querySelector("[data-coffee-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();