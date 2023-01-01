import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

export const LayoutModal = ({
  isOpen,
  onRequestClose,
  children,
  title,
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
