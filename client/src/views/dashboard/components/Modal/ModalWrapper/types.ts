export interface ModalWrapperProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  visible?: boolean;
  title?: string;
  selector: string;
  portalClassName?: string;
}
