import styled from "styled-components";

export const Container = styled.div`
  min-width: 28rem;
  max-width: 28rem;
  height: calc(100vh - var(--header-h) - 100px);
  ${({ theme }) => theme.mixins.flexCenter}
  border-radius: var(--borderR-md);
  font-weight: var(--font-bold);
  font-size: var(--fz-xxl);
  color: var(--color-grey);
  margin-top: 4.4rem;
  background: ${({ theme }) => theme.theme.newColumn};
  cursor: pointer;

  &:hover {
    color: var(--main-purple);
    transition: all 0.2s ease-in-out;
  }
`;
