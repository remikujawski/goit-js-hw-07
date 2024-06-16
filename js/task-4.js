"use strict";

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (login === "" || password === "") {
    alert("All form fields must be filled in!");
  } else {
    console.log({ email: login, password: password });
    form.reset();
  }
}
