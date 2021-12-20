import { withRouter } from "react-router-dom";
import "./Modal.css";

const Modal = () => (
  <div
    role="button"
    className="modal-wrapper"
    onClick={() => this.props.history.goBack()}
  >
    <div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
      <p>CONTENT</p>
    </div>
  </div>
);

export default withRouter(Modal);
