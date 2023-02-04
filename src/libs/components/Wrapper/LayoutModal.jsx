import React from "react";
import Modal from "react-modal";
import { useThemeStore } from "../../../store/themeStore";
import styled from "styled-components";

Modal.setAppElement("#root");

export const LayoutModal = ({
  isOpen,
  onRequestClose,
  children,
  visibility = true,
  title,
}) => {
  const theme = useThemeStore((state) => state.theme);
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
      background: theme === "light" ? "#fff" : "#2B2C37",
      border: "none",
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
      <Container>{children}</Container>
    </Modal>
  );
};

const Container = styled.div`
  .modal-title {
    color: ${({ theme }) => theme.theme.text};
  }
  .modal-title.alert {
    color: var(--red);
  }
  .modal-paragraph {
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #828fa3;
    padding-bottom: 24px;
  }
  .modal-box {
    display: flex;
    gap: 16px;
  }

  /* Popover */
  .popover {
    display: flex;
    flex-direction: column;
    width: 192px;
    position: absolute;
    top: 22px;
    right: 0;
    padding: 1.6rem;
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
    background: #ffffff;
    gap: 16px;
  }
  .popover.popover-center {
    left: 50%;
    transform: translate(-50%);
  }
  .popoverInvisible {
    opacity: 0;
  }
`;
