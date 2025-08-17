const modal = new bootstrap.Modal(document.getElementById("godrejModal"));

const modalState = {
  show: () => modal.show(),
  hide: () => modal.hide(),
};

// Attach to class triggers
document.querySelectorAll(".open-popup-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    modalState.show();
  });
});
