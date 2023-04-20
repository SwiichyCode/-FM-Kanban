export interface ModalWrapperProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  visible?: boolean;
  selector: string;
  portalClassName?: string;
}
