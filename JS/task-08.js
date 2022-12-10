const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Uzupełnij wszystkie pola");
  } else {
    const loginObject = { email: email.value, password: password.value };
    console.log(loginObject);
    event.currentTarget.reset();
  }
});
