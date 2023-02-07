import styled from "styled-components";

interface ContainerProps {
  isChecked: boolean;
}

export const Container =
  styled.div <
  ContainerProps >
  `
  ${({ theme }) => theme.mixins.flexAlignCenter}
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.theme.checkbox};
  border-radius: 4px;
  padding: 0 1.2rem;
  gap: 1.6rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.theme.checkboxHover};
  }

  & > * {
    cursor: pointer;
  }

  input {
    width: 1.6rem;
    height: 1.6rem;
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
