(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-icecream-modal-open]"),
    closeModalBtn: document.querySelector("[data-icecream-modal-close]"),
    modal: document.querySelector("[data-icecream-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();