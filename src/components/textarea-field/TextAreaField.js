import "./TextAreaField.scss";

const TextAreaField = ({ label, name }) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("textarea-field");

  const labelElement = document.createElement("label");
  labelElement.setAttribute("for", name);
  labelElement.textContent = label;

  const textAreaElement = document.createElement("textarea");
  textAreaElement.id = name;
  textAreaElement.name = name;
  textAreaElement.required = true;

  wrapper.appendChild(labelElement);
  wrapper.appendChild(textAreaElement);

  return wrapper;
};

export default TextAreaField;
