import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #f4f7fd;
  border-radius: 4px;
  padding: 0 12px;
  gap: 16px;
  cursor: pointer;

  &:hover {
    background: ${({ isChecked }) => (isChecked ? "#f4f7fd" : "#d8d7f1")};
  }

  & > * {
    cursor: pointer;
  }

  input {
    width: 16px;
    height: 16px;
  }

  input[type="checkbox"] {
    accent-color: var(--main-purple);
  }

  label {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: ${({ isChecked }) =>
      isChecked ? "line-through" : "default"};

    color: ${({ isChecked }) => (isChecked ? "#7A7C88" : "#000112")};

    transition: all 200ms ease-in-out;
    user-select: none;
  }
`;
