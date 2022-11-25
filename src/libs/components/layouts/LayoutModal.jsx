import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",

    transform: "translate(-50%, -50%)",
    width: "480px",
    padding: "32px",
  },
};

Modal.setAppElement("#root");

export const LayoutModal = ({ isOpen, onRequestClose, children, title }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="overlay"
    >
      <Title>{title}</Title>
      {children}
    </Modal>
  );
};

const Title = styled.h2`
  font-size: var(--fz-xl);
  text-transform: capitalize;
  margin-bottom: 2.4rem;
`;
