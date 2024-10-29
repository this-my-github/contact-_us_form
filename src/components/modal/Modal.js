import "./Modal.scss";

const Modal = () => {
  const modal = document.querySelector("#myModal");
  const btn = document.querySelector(".openModal");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
    const modalContent = document.querySelector(".modal-content");
    modalContent.style.transform = "translateX(100%)";
    setTimeout(() => {
      modalContent.style.transform = "translateX(0)";
    }, 10);
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

export default Modal;
