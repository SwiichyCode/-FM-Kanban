import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 100vh;
  padding: 32px 0;
  border-right: 1px solid var(--line-light);
  background: var(--white);

  .sidebar-top {
    display: flex;
    flex-direction: column;
    gap: 54px;
  }

  .sidebar-bot {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const SidebarNavContainer = styled.nav`
  color: var(--medium-grey);

  h2 {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    padding: 0px 0 19px 24px;
    transition: all 200ms ease-in-out;
    @media screen and (min-width: 1024px) {
      padding: 0px 0 19px 32px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;

    .nav-item {
      width: 100%;
      max-width: 240px;
      display: flex;
      align-items: center;
      padding: 14px 0 15px 24px;
      border-radius: 0px 100px 100px 0px;
      text-decoration: none;
      color: var(--medium-grey);
      cursor: pointer;
      transition: all 200ms ease-in-out;

      &.activeClassName {
        color: #fff;
        background: var(--main-purple);
      }

      @media screen and (min-width: 1024px) {
        padding: 14px 0 15px 32px;
      }

      /* &:last-child {
        color: var(--main-purple);
      } */

      &:hover {
        background: #f0effa;
        color: var(--main-purple);
      }

      svg {
        margin-right: 12px;
      }

      li {
        width: 100%;
        max-width: 240px;
        font-weight: 700;
        font-size: 15px;
        line-height: 19px;
        text-transform: capitalize;
      }
    }
  }
`;

export const SidebarLogoContainer = styled.div`
  img {
    padding-left: 26px;
    transition: all 200ms ease-in-out;

    @media screen and (min-width: 1024px) {
      padding-left: 34px;
    }
  }
`;
