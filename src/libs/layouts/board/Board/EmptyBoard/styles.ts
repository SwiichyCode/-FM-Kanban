import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-h));
  ${({ theme }) => theme.mixins.flexCenter}
  flex-direction: column;
  gap: 3.2rem;

  p {
    font-weight: var(--font-bold);
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: var(--color-grey);
  }
`;
