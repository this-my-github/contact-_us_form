const onSubmitForm = async (form) => {
  const formData = new FormData(form);

  try {
    const response = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.status === "success") {
      console.log("success", result);
      handleSuccess(result.message);
    } else if (result.status === "error") {
      console.log("error", result);
      handleError(result.message);
    }
  } catch (error) {
    console.error("Ошибка при отправке формы:", error);
  }
};

const displayMessage = (message, type) => {
  const messageElements = document.querySelectorAll(
    ".error-message, .success-message"
  );
  messageElements.forEach((el) => el.remove());

  const messageDiv = document.createElement("div");
  messageDiv.classList.add(type);
  messageDiv.textContent = message;

  const form = document.querySelector("form");
  form.appendChild(messageDiv);
};

const handleSuccess = (message) => {
  displayMessage(message, "success-message");
  const form = document.querySelector("form");
  form.reset();
};

const handleError = (message) => {
  displayMessage(message, "error-message");
  console.log("errorMessage", message);
};

export default onSubmitForm;
