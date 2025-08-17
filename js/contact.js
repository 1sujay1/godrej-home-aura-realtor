document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.getElementById("contactCardToggle");
  var cardBox = document.getElementById("contactCardBox");
  var icon = document.getElementById("toggleIcon");
  function setMobileState() {
    if (window.innerWidth < 768) {
      cardBox.classList.remove("open");
      icon.innerHTML = "&#128222;";
      toggleBtn.style.display = "block";
    } else {
      cardBox.classList.add("open");
      toggleBtn.style.display = "none";
    }
  }
  setMobileState();
  toggleBtn.addEventListener("click", function () {
    cardBox.classList.toggle("open");
    toggleBtn.classList.toggle("open");
    icon.innerHTML = cardBox.classList.contains("open")
      ? "&#10005;"
      : "&#128222;";
  });
  window.addEventListener("resize", setMobileState);
});
