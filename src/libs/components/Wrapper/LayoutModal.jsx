import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const LayoutModal = ({
  isOpen,
  onRequestClose,
  children,
  visibility = true,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",

      transform: "translate(-50%, -50%)",
      width: "480px",
      padding: "32px",
      display: visibility ? "initial" : "none",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="overlay"
    >
      {children}
    </Modal>
  );
};
