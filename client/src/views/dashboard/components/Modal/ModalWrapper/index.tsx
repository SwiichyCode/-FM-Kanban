import Modal from "react-modal";
import { useThemeStore } from "../../../../../stores/themeStore";
import { ModalWrapperProps } from "./types";
import { ModalContainer } from "./styles";

export const ModalWrapper = ({
  isOpen,
  onRequestClose,
  children,
  visible = true,
  selector,
  portalClassName,
}: ModalWrapperProps) => {
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
      display: visible ? "initial" : "none",
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
      parentSelector={() => document.querySelector(selector) as HTMLElement}
      ariaHideApp={false}
    >
      <ModalContainer>{children}</ModalContainer>
    </Modal>
  );
};
