import InputField from "../input-field/InputField";
import SubmitButton from "../submit-button/SubmitButton";
import TextAreaField from "../textarea-field/TextAreaField";
import { validateForm } from "../../utils/formValidation";
import onSubmitForm from "../../handlers/onSubmitForm";
import "./ContactForm.scss";

const ContactForm = () => {
  const form = document.createElement("form");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForm(form);

    if (isValid) {
      await onSubmitForm(form);
    }
  };

  form.onsubmit = handleSubmit;

  form.appendChild(
    InputField({ label: "Имя", type: "text", name: "name", value: "" })
  );
  form.appendChild(
    InputField({ label: "E-mail", type: "email", name: "email", value: "" })
  );
  form.appendChild(
    InputField({ label: "Телефон", type: "tel", name: "phone", value: "" })
  );
  form.appendChild(TextAreaField({ label: "Сообщение", name: "message" }));
  form.appendChild(SubmitButton());

  return form;
};

export default ContactForm;
