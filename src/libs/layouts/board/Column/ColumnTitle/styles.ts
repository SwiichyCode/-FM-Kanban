import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexAlignCenter}
  gap: 1.2rem;

  h2 {
    font-size: var(--fz-xxs);
    line-height: 1.5rem;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    color: var(--color-grey);
  }
`;
