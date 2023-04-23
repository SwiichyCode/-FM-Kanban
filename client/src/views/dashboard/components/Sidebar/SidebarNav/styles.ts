import styled from "styled-components";

export const SidebarNavContainer = styled.nav`
  color: var(--color-grey);

  h2 {
    font-weight: var(--font-bold);
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    padding: 0px 0 1.9rem 2.4rem;
    transition: all 200ms ease-in-out;
    @media screen and (min-width: 1024px) {
      padding: 0px 0 1.9rem 3.2rem;
    }
  }

  li {
    width: 100%;
    max-width: 24rem;
    font-weight: var(--font-bold);
    font-size: 1.5rem;
    line-height: 1.9rem;
    text-transform: capitalize;
  }
  ul {
    ${({ theme }) => theme.mixins.flexColumn}
    width: 100%;

    .nav-item {
      width: 100%;
      max-width: 24rem;
      ${({ theme }) => theme.mixins.flexBetween}
      align-items: center;
      padding: 1.4rem 0 1.5rem 2.4rem;
      border-radius: var(--border-xl);
      text-decoration: none;
      color: var(--color-grey);
      cursor: pointer;
      transition: all 200ms ease-in-out;

      .left-side {
        display: flex;
        align-items: center;
      }

      &.activeClassName {
        color: #fff;
        background: var(--color-purple);
      }
      @media screen and (min-width: 1024px) {
        padding: 1.4rem 0 1.5rem 3.2rem;
      }
      &:hover {
        // ???
        background: #f0effa;
        color: var(--color-purple);
      }
      svg {
        margin-right: 1.2rem;
      }
    }
  }
`;
