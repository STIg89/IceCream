(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingridients-data-modal-open]"),
    closeModalBtn: document.querySelector("[ingridients-data-modal-close]"),
    modal: document.querySelector("[ingridients-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();