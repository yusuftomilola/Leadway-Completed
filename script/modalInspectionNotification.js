const showModal2 = document.querySelector(".show-modal2");
const closeModal2 = document.querySelector(".close-modal2");
const modal2 = document.querySelector(".modal2");
const overlay2 = document.querySelector(".overlay2");

function closeModals2() {
  modal2.classList.add("hidden");
  overlay2.classList.add("hidden");
}

function openModal2() {
  modal2.classList.remove("hidden");
  overlay2.classList.remove("hidden");
}

showModal2.addEventListener("click", openModal2);

closeModal2.addEventListener("click", closeModals2);

overlay2.addEventListener("click", closeModals2);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModals2();
  }
});
