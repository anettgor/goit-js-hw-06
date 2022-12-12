const inputForm = document.querySelector("#validation-input");

inputForm.addEventListener("blur", () => {
  if (inputForm.value.length === parseInt(inputForm.dataset.length)) {
    inputForm.classList.add("valid");
    inputForm.classList.remove("invalid");
  } else {
    inputForm.classList.add("invalid");
    inputForm.classList.remove("valid");
  }
});
