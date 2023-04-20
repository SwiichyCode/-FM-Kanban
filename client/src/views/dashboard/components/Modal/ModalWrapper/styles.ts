import styled from "styled-components";

export const ModalContainer = styled.div`
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
