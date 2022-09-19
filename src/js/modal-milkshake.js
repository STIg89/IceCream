(() => {
  const refs = {
    openModalBtn: document.querySelector("[milkshake-data-modal-open]"),
    closeModalBtn: document.querySelector("[milkshake-data-modal-close]"),
    modal: document.querySelector("[milkshake-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();