(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-milkshake-modal-open]"),
    closeModalBtn: document.querySelector("[data-milkshake-modal-close]"),
    modal: document.querySelector("[data-milkshake-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();