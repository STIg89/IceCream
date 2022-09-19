(() => {
  const refs = {
    openModalBtn: document.querySelector("[by-data-modal-open]"),
    closeModalBtn: document.querySelector("[by-data-modal-close]"),
    modal: document.querySelector("[by-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();