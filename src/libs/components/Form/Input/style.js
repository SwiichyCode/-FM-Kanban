import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.maxW ? `${props.maxW}px` : "initial")};

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  ${({ theme }) => theme.mixins.flexColumn}
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 8px;
`;

export const Error = styled.span`
  font-weight: var(--font-medium);
  font-size: var(--fz-md);
  color: var(--color-red);
  line-height: 2.3rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: var(--fz-lg);
  line-height: 2.3rem;
  padding: 8px 16px 9px 16px;
  border-radius: var(--borderR-lg);
  color: ${({ theme }) => theme.theme.text};
  border: ${({ error }) =>
    error
      ? "1px solid var(--color-red)"
      : "1px solid rgba(130, 143, 163, 0.25);"};

  &:focus {
    outline: ${({ error }) =>
      error ? "1px solid var(--color-red)" : "1px solid var(--color-purple)"};
    box-shadow: ${({ error }) =>
      error
        ? "0px 0px 15px -2px var(--color-red)"
        : "0px 0px 15px -2px var(--color-purple)"};
  }

  &::placeholder {
    color: var(--color-grey-200);
  }
`;

export const StyledLabel = styled.label`
  font-weight: var(--font-bold);
  font-size: var(--fz-lg);
  line-height: 15px;
  color: var(--color-grey);
  text-transform: capitalize;
`;
