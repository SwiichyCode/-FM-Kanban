import styled from "styled-components";

export const SidebarHideContainer = styled.div`
  width: 100%;
  max-width: 23.5rem;
  ${({ theme }) => theme.mixins.flexAlignCenter}
  height: 5.2rem;
  text-transform: capitalize;
  gap: 1rem;
  border-radius: 0px 10rem 10rem 0px;
  padding-left: 3.7rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    // ???
    background: #f0effa;
    color: var(--color-purple) !important;
    .icon-hide-sidebar {
      fill: var(--color-purple);
    }
    span {
      color: var(--color-purple);
    }
  }
  span {
    font-weight: var(--font-bold);
    font-size: 1.5rem;
    height: 2rem;
    color: var(--medium-grey);
    line-height: auto;
    padding-top: 2px;
  }
`;
