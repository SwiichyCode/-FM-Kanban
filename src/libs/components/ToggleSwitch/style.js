import styled from "styled-components";

export const ToggleSwitchContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 60px;
  position: relative;

  .react-switch-checkbox {
    position: absolute;
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 60px;
    height: 30px;
    background: var(--main-purple);
    border-radius: 100px;
    position: relative;
    transition: all 200ms ease-in-out;
  }

  .react-switch-label .react-switch-button {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 22px;
    height: 22px;
    border-radius: 45px;
    transition: 0.2s;
    background: var(--white);
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
`;
