// Is this the "submit listener" (no click listeners) needed for the JS?

const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please provide a valid email address!");
  } else {
    email.setCustomValidity("");
  }
});
