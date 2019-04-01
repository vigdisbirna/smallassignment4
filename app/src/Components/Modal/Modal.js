import React from "react";
import styles from "./Modal.module.css";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalText from "../ModalText/ModalText";
import ModalFooter from "../ModalFooter/ModalFooter";
import PropTypes from "prop-types";

class Modal extends React.Component {
  static Title = ModalTitle;
  static Body = ModalText;
  static Footer = ModalFooter;
  render() {
    const { isOpen, onClose, children } = this.props;

    if (isOpen) {
      return (
        <div>
          <div className={styles["modal-container"]}>
            <div onClick={e => onClose(e)}>{children}</div>
          </div>
        </div>
      );
    }

    return <div />;
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
