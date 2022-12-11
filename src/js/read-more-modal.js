(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-read-open]"),
    closeModalBtn: document.querySelector("[data-modal-read-close]"),
    modal: document.querySelector("[data-read-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();