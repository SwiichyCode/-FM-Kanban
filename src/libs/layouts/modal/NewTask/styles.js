import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 8px;
`;

export const Error = styled.p`
  font-weight: var(--font-medium);
  font-size: var(--fz-md);
  color: var(--color-red);
  line-height: 2.3rem;
`;
