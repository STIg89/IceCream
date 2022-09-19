(() => {
  const refs = {
    openModalBtn: document.querySelector("[icecream-data-modal-open]"),
    closeModalBtn: document.querySelector("[icecream-data-modal-close]"),
    modal: document.querySelector("[icecream-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();