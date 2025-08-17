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

// Modal form submission logic

document.addEventListener("DOMContentLoaded", function () {
  var modalForm = document.querySelector("#godrejModal form");
  if (!modalForm) return;
  var modalMsgBox = document.createElement("div");
  modalMsgBox.id = "modalFormMsg";
  modalMsgBox.style.marginTop = "10px";
  modalMsgBox.style.display = "none";
  modalForm.appendChild(modalMsgBox);
  var submitBtn = modalForm.querySelector('button[type="submit"]');
  modalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    modalMsgBox.style.display = "none";
    var name = modalForm
      .querySelector('input[placeholder="Name"]')
      .value.trim();
    var email = modalForm
      .querySelector('input[placeholder="E-Mail Address"]')
      .value.trim();
    var mobile = modalForm
      .querySelector('input[placeholder="Mobile No"]')
      .value.trim();
    if (!name || !email || !mobile) {
      modalMsgBox.style.display = "block";
      modalMsgBox.style.color = "#d32f2f";
      modalMsgBox.textContent = "Please fill all fields.";
      return;
    }
    submitBtn.disabled = true;
    var originalText = submitBtn.textContent;
    submitBtn.textContent = "Submitting...";
    fetch(`${BaseURL}/api/v1/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, mobile, message: "GODREJ-MODAL" }),
    })
      .then(function (res) {
        if (res.status !== 200) {
          throw new Error("Failed to submit. Please try again.");
        }
        return res.json();
      })
      .then(function (data) {
        modalMsgBox.style.display = "block";
        modalMsgBox.style.color = "#388e3c";
        modalMsgBox.textContent = "Thank you! Your message has been sent.";
        modalForm.reset();
      })
      .catch(function (err) {
        modalMsgBox.style.display = "block";
        modalMsgBox.style.color = "#d32f2f";
        modalMsgBox.textContent =
          err.message || "Submission failed. Please try again.";
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
  });
});
