import Inputmask from "inputmask";
import "./InputField.scss";

const InputField = ({ label, type, name, value, onChange }) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("input-field");

  const labelElement = document.createElement("label");
  labelElement.setAttribute("for", name);
  labelElement.textContent = label;

  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.id = name;
  inputElement.name = name;
  inputElement.value = value;
  inputElement.required = true;

  inputElement.oninput = (event) => {
    event.target.dispatchEvent(new Event("change"));
    if (onChange) {
      onChange(event);
    }

    resetField(inputElement);
  };

  if (type === "tel") {
    const mask = new Inputmask("+375 (99) 999-99-99");
    mask.mask(inputElement);
  }

  wrapper.appendChild(labelElement);
  wrapper.appendChild(inputElement);

  inputElement.addEventListener("blur", () => {
    if (type === "tel") {
      const isValid = inputElement.inputmask.isComplete();
      if (!isValid) {
        inputElement.classList.add("error");
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = "Неверный формат номера телефона.";
        wrapper.appendChild(errorMessage);
      }
    }
  });

  return wrapper;
};

const resetField = (field) => {
  field.classList.remove("error");

  const errorMessage = field.parentNode.querySelector(".error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
};

export default InputField;
