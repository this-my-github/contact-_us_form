import "./styles.scss";
import ContactForm from "./components/contact-form/ContactForm";
import Modal from "./components/modal/Modal";

const app = document.getElementById("app");

const formElement = ContactForm();
app.appendChild(formElement);

Modal();
