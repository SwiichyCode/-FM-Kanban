import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 64px;

  ${({ theme }) => theme.mixins.flexBetween}
  background: var(--white);
  border-bottom: 1px solid var(--line-light);
  transition: all 200ms ease-in-out;

  @media screen and (min-width: 750px) {
    height: 80px;
  }

  @media screen and (min-width: 1024px) {
    height: 97px;
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: var(--black);
    padding-left: 2.4rem;

    @media screen and (min-width: 750px) {
      font-size: 20px;
      line-height: 25px;
    }
  }

  .left-side {
    ${({ theme }) => theme.mixins.flexAlignCenter}
    gap: 16px;

    .header-title {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;

      img {
        transform: ${({ openBackdrop }) =>
          openBackdrop ? "rotate(180deg)" : "rotate(0)"};
        transition: all 200ms ease-in;
      }
    }

    @media screen and (min-width: 750px) {
      .logo-mobile,
      .logo-chevron {
        display: none;
      }

      .header-title {
        pointer-events: none;
      }
    }
  }

  .right-side {
    ${({ theme }) => theme.mixins.flexBetween}
    gap: 16px;

    .board-edit {
      cursor: pointer;
    }

    @media screen and (min-width: 750px) {
      width: 100%;
      max-width: 192.62px;
    }
  }

  .content-popover {
    ${({ theme }) => theme.mixins.flexColumn}
    gap: 16px;
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;

    .edit-board {
      color: #828fa3;
    }
    .delete-board {
      color: #ea5555;
    }
  }

  @media screen and (min-width: 750px) {
    .icon-add {
      display: none;
    }
  }
`;
