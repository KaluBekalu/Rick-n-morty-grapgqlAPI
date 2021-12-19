import { useContext } from "react";
import "./Modal.css";
import Episode from "../episode/Episode";
import { RootContext } from "../../contexts/Context";

function Modal() {
  const { setShowModal } = useContext(RootContext);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-head">
          <div className="left">
            <img src="/Rick_Sanchez.png" alt="avatar" />
            <h2>Rick Sanchez</h2>
            <i className="far fa-heart"></i>
          </div>
          <div className="right">
            <button>40 Episodes</button>
            <i
              onClick={() => setShowModal(false)}
              className="far fa-times-circle"
            ></i>
          </div>
        </div>
        <hr />

        <div className="bottom">
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
          <Episode />
        </div>
      </div>
    </div>
  );
}

export default Modal;
