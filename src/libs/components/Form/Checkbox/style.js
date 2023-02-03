import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexAlignCenter}
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
    font-weight: var(--font-bold);
    font-size: var(--fz-xxs);
    text-decoration-line: ${({ isChecked }) =>
      isChecked ? "line-through" : "default"};
    color: ${({ isChecked }) =>
      isChecked ? "var(--color-grey-300)" : "var(--color-black)"};
    transition: all 200ms ease-in-out;
    user-select: none;
  }
`;
