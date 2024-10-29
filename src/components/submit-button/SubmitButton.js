import "./SubmitButton.scss";

const SubmitButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.type = "submit";
  buttonElement.textContent = "Отправить";

  return buttonElement;
};

export default SubmitButton;
