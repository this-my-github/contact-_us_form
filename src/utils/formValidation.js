const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateForm = (form) => {
  let isValid = true;

  const errorElements = form.querySelectorAll(".error-message");
  errorElements.forEach((el) => el.remove());

  const fields = form.querySelectorAll("input, textarea");
  fields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      showError(field, "Это поле обязательно для заполнения");
    } else if (field.type === "email" && !validateEmail(field.value)) {
      isValid = false;
      showError(field, "Введите корректный адрес электронной почты");
    } else {
      resetField(field);
    }
  });

  return isValid;
};

const showError = (field, message) => {
  field.classList.add("error");

  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;

  field.parentNode.insertBefore(errorMessage, field.nextSibling);
};

const resetField = (field) => {
  field.classList.remove("error");

  const errorMessage = field.parentNode.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
};

export { validateForm };
