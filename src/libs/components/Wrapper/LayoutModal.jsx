import React from "react";
import Modal from "react-modal";
import { useThemeStore } from "../../../store/themeStore";
import styled from "styled-components";

// Modal.setAppElement("#root");

export const LayoutModal = ({
  isOpen,
  onRequestClose,
  children,
  visibility = true,
  selector,
  portalClassName,
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
      overflow: "initial",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="overlay"
      portalClassName={portalClassName}
      parentSelector={() => document.querySelector(selector)}
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

  .popover.popover-center {
    left: 50%;
    transform: translate(-50%);
  }
  .popoverInvisible {
    opacity: 0;
  }
`;
