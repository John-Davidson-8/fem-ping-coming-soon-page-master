const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please provide a valid email address!");
  } else {
    email.setCustomValidity("");
  }
});
