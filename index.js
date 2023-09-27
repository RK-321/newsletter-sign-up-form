const form = document.querySelector('form');
const container_1 = document.querySelector(".container-1");
const container_2 = document.querySelector(".container-2");
const errorMessage = document.querySelector(".error-message");
// const emailInput = document.querySelector('#email');
const emailInput = document.querySelector('.email-input');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailInput.value.trim()) {
    errorMessage.classList.remove("hide");
    emailInput.classList.add("error");
  } else {
    errorMessage.classList.add("hide");
    emailInput.classList.remove("error");
    container_1.classList.add("hide");
    container_2.classList.remove("hide");
  }
});
