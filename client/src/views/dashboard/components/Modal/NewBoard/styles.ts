import styled from "styled-components";

export const SidebarModalContainer = styled.button`
  border: none;
  background: transparent;
  font-weight: var(--font-bold);
  font-size: 1.5rem;
  line-height: 1.9rem;
  text-transform: capitalize;
  color: var(--color-purple) !important;
  img {
    padding-right: 1.6rem;
  }
`;

export const Form = styled.form`
  ${({ theme }) => theme.mixins.flexColumn}
  gap: 2.4rem;
`;
