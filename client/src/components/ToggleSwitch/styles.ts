import styled from "styled-components";

export const ToggleSwitchContainer = styled.div`
  width: 100%;
  max-width: 6rem;
  position: relative;
  &:hover {
    .react-switch-label {
      background: #a8a4ff;
    }
  }
  .react-switch-checkbox {
    position: absolute;
    height: 0;
    width: 0;
    visibility: hidden;
  }
  .react-switch-label {
    ${({ theme }) => theme.mixins.flexBetween}
    cursor: pointer;
    width: 5rem;
    height: 2.6rem;
    background: var(--color-purple);
    border-radius: 10rem;
    position: relative;
    transition: all 200ms ease-in-out;
  }
  .react-switch-label .react-switch-button {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 4.5rem;
    transition: 0.2s;
    background: var(--color-white);
    box-shadow: var(--shadow-md);
  }
  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
`;
