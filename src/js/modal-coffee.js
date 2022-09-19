(() => {
  const refs = {
    openModalBtn: document.querySelector("[coffee-data-modal-open]"),
    closeModalBtn: document.querySelector("[coffee-data-modal-close]"),
    modal: document.querySelector("[coffee-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();